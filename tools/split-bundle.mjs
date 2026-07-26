/**
 * split-bundle.mjs — one-time semantic splitter for sf2.4904b063.js
 *
 * Groups the 88k-line Haxe-compiled bundle into ~60 domain files under src/sf2/.
 * Grouping strategy:
 *   1. Inheritance tree: every class goes in the same file as its root ancestor.
 *   2. Small adjacent trees (< 5 classes total) are merged with their neighbour.
 *   3. Domain name is detected from keyword signals in the combined content.
 *   4. Non-class code (utility functions, constants) gets its own bookend files.
 *
 * Run once: node tools/split-bundle.mjs
 * After editing src/sf2/ files, reassemble: node tools/build.mjs
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT   = fileURLToPath(new URL("../", import.meta.url));
const BUNDLE = join(ROOT, "sf2.4904b063.js");
const OUT    = join(ROOT, "src", "sf2");

await mkdir(OUT, { recursive: true });

// ─────────────────────────────────────────────────────────────────────────────
// 1. Load and find IIFE boundaries
// ─────────────────────────────────────────────────────────────────────────────
const raw   = await readFile(BUNDLE, "utf8");
const lines = raw.split("\n");

const iifeOpenIdx  = lines.findIndex(l => l.startsWith("(function (Ka, va) {"));
const iifeCloseIdx = (() => {
  // Search from end for the line that opens the outer call arguments: `})(`
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].startsWith("})")) return i;
  }
  return lines.length - 5;
})();

console.log(`IIFE open:  line ${iifeOpenIdx  + 1}`);
console.log(`IIFE close: line ${iifeCloseIdx + 1}`);

// ─────────────────────────────────────────────────────────────────────────────
// 2. Write preamble (everything before IIFE open — Sentry + polyfills)
// ─────────────────────────────────────────────────────────────────────────────
const preamble = lines.slice(0, iifeOpenIdx).join("\n");
await writeFile(join(OUT, "000-preamble.js"), preamble + "\n");
console.log("Wrote 000-preamble.js");

// ─────────────────────────────────────────────────────────────────────────────
// 3. Find every top-level declaration inside the IIFE (2-space indent)
// ─────────────────────────────────────────────────────────────────────────────
const DECL_RE = /^  (function |async function |class |var |let |const )/;

const declIndices = [];
for (let i = iifeOpenIdx + 1; i < iifeCloseIdx; i++) {
  if (DECL_RE.test(lines[i])) declIndices.push(i);
}

// Each block: from its declaration line to just before the next one
const blocks = declIndices.map((startIdx, bi) => {
  const endIdx  = bi + 1 < declIndices.length ? declIndices[bi + 1] - 1 : iifeCloseIdx - 1;
  const text    = lines[startIdx];
  const classM  = text.match(/^  class (\S+?)(?:\s+extends\s+(\S+?))?\s*\{/);
  const funcM   = !classM && text.match(/^  (?:async )?function (\S+?)\s*\(/);
  const varM    = !classM && !funcM && text.match(/^  (?:var|let|const)\s+([^\s=,;]+)/);
  return {
    startIdx,
    endIdx,
    lineCount : endIdx - startIdx + 1,
    type      : classM ? "class" : funcM ? "function" : "var",
    name      : (classM?.[1] ?? funcM?.[1] ?? varM?.[1] ?? "?"),
    parent    : classM?.[2] ?? null,
    content   : lines.slice(startIdx, endIdx + 1).join("\n"),
  };
});

console.log(`Found ${blocks.length} top-level declarations`);

// ─────────────────────────────────────────────────────────────────────────────
// 4. Build inheritance map and find the tree root for every class
// ─────────────────────────────────────────────────────────────────────────────
const classBlocks = blocks.filter(b => b.type === "class");
const classMap    = new Map(classBlocks.map(b => [b.name, b]));

// Memoised root finder
const rootCache = new Map();
function getRoot(name) {
  if (rootCache.has(name)) return rootCache.get(name);
  const b = classMap.get(name);
  const root = (!b || !b.parent || !classMap.has(b.parent))
    ? name
    : getRoot(b.parent);
  rootCache.set(name, root);
  return root;
}

classBlocks.forEach(b => { b.treeRoot = getRoot(b.name); });

// Count how many classes belong to each tree root
const treeSize = new Map();
classBlocks.forEach(b => treeSize.set(b.treeRoot, (treeSize.get(b.treeRoot) ?? 0) + 1));

// ─────────────────────────────────────────────────────────────────────────────
// 5. Walk blocks in line order and assign to file groups
//    Rules:
//    • Start a NEW file when hitting a tree root with 5+ members in its tree.
//    • Also start a new file if the current file exceeds 2200 lines and we're
//      at a new tree root boundary.
//    • Non-class blocks (functions, vars) attach to the current file.
// ─────────────────────────────────────────────────────────────────────────────
const firstClassBlock = blocks.find(b => b.type === "class");
const lastClassBlock  = [...blocks].reverse().find(b => b.type === "class");

const utilBlocks     = blocks.filter(b => b.startIdx < firstClassBlock.startIdx);
const constantBlocks = blocks.filter(b => b.startIdx > lastClassBlock.startIdx);
const bodyBlocks     = blocks.filter(b => b.startIdx >= firstClassBlock.startIdx && b.startIdx <= lastClassBlock.endIdx);

const groups = []; // [{root, blocks[]}]
let cur = null;

function startGroup(root) {
  cur = { root, blocks: [] };
  groups.push(cur);
}

function curLines() {
  return cur ? cur.blocks.reduce((s, b) => s + b.lineCount, 0) : 0;
}

for (const block of bodyBlocks) {
  if (block.type === "class") {
    const root = block.treeRoot;
    const isRootNode   = root === block.name;               // this IS the tree root
    const isMajorTree  = (treeSize.get(root) ?? 0) >= 5;   // tree big enough for own file
    const isOverBudget = curLines() > 2200;

    if (!cur || (isRootNode && isMajorTree) || (isRootNode && isOverBudget)) {
      startGroup(root);
    }
  } else {
    // Non-class top-level block: attach to current group
    if (!cur) startGroup("misc");
  }
  cur.blocks.push(block);
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. Merge tiny groups (< 3 classes) into the previous group
// ─────────────────────────────────────────────────────────────────────────────
const merged = [];
for (const g of groups) {
  const classCount = g.blocks.filter(b => b.type === "class").length;
  if (merged.length && classCount < 3) {
    merged[merged.length - 1].blocks.push(...g.blocks);
  } else {
    merged.push(g);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. Detect domain label from content keywords
// ─────────────────────────────────────────────────────────────────────────────
const DOMAIN_SIGNALS = [
  // Rendering pipeline
  ["shaders",           [/precision (mediump|highp|lowp) float/, /void main\(\)/, /gl_FragColor/, /gl_Position/, /nvarying/, /nuniform/]],
  ["renderer-webgl",    [/gl\.(bind|draw|clear|blend|viewport|createBuffer|uniform|vertex|framebuffer|renderbuffer|stencil|scissor)/]],
  ["renderer-textures", [/texImage2D|createTexture|\.dds|\.ktx|DXT|DDS|KTX|texParameter|activeTexture/]],
  ["renderer-canvas",   [/canvas.*2d|getContext.*2d|fillRect|strokeRect|drawImage|fillText/i]],
  // Audio
  ["audio",             [/AudioContext|GainNode|AudioBuffer|\.ogg|\.m4a|createGain|createBufferSource|WebAudio/]],
  // Input
  ["input",             [/pointerdown|pointermove|pointerup|touchstart|clientX|clientY|joystick|gesture/]],
  // Physics
  ["physics",           [/[Vv]elocity|[Gg]ravity|[Ff]riction|collision|AABB|acceleration/]],
  // Data loading
  ["binary-data",       [/zstd|Zstandard|FSE accuracy|invalid zstd|window size too large/]],
  ["xml-parser",        [/getAttribute|getElementsByTagName|childNodes|DOMParser|parseXML/]],
  ["localization",      [/"en".*"de"|"de".*"en"/, /getCurrentLanguage|jv\s*=\s*"en|language.*locale/]],
  ["save-storage",      [/localStorage|SF2User|SF2Packs|SF2Flags|gzipSync/]],
  // AI
  ["ai",                [/DodgeChance|CounterAttackChance|Strikes|UseDefense|[Tt]actic|EAdaptive/]],
  // Combat
  ["combat-perks",      [/PERK\s*-+|ModStart|ModDestruction|PerkName.*ModName|EGivePerk|EGiveItemPerk/]],
  ["combat",            [/EFightEnd|EFightRestart|hitbox|knockback|EAnimationAttack|FightBoss|FightNone/]],
  ["animation",         [/EAnimationNone|EAnimationMove|EAnimationInterrupted|animations\./]],
  // Quest/progression
  ["quest-conditions",  [/CompareType|CaseSensitive|RequireItem|EquipItem|ERuleRingout|NoButton|NoAnimation/]],
  ["quest-actions",     [/EActionStart|EGiveItem|EDeliver|ESetCurrentZone|ESetMapFocus|EUnlockCharacter/]],
  ["quest-engine",      [/EAttachQuestFile|EActivate|EResumeQuests|ESetVariable|EForeach|EClearQuestQueue/]],
  ["quest-handlers",    [/EObjectAnimation|EObjectNodes|EObjectPivot|EObjectWall/]],
  // Economy / progression
  ["economy",           [/EBuyItem|EBuyOffer|EGiveCurrency|ETakeCurrency|EUpdateShop|EOpenShop|EUpdatePacksData/]],
  ["progression",       [/EShowUpgrades|character_progress|EUnlockCharacter|forge.*upgrade|upgrade.*forge/i]],
  // UI
  ["ui-screens",        [/EChangeScene|EActScreen|EShowAd|EShowVideo|EShowCredits|EShowNews/]],
  ["ui",                [/EButtonGold|EButtonDark|EButtonWhite|EDialog|EClickButton|EChangeTab|EBlockTouches/]],
  // System
  ["networking",        [/XMLHttpRequest|responseText|onreadystatechange|\.statusCode|\.send\(/]],
  ["entry-point",       [/Ka\.SF2|GameInterface\.|gameReady|gameStart|L\.Seb/]],
  ["errors",            [/extends Error\b|extends Sc\b/]],
  ["camera",            [/Camera|orthographic|projection|[Vv]iewport.*matrix|matrix.*[Vv]iewport/]],
  ["map-world",         [/preview_main|preview_bosses|locations\/|FightBosses\b|stage.*xml/]],
];

function detectLabel(content) {
  for (const [label, patterns] of DOMAIN_SIGNALS) {
    if (patterns.some(p => p.test(content))) return label;
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. Write files
// ─────────────────────────────────────────────────────────────────────────────
// Deduplicate filenames if two groups get the same label
const usedNames = new Set();
function uniqueFilename(num, label) {
  let name = `${String(num).padStart(3, "0")}-${label}.js`;
  if (!usedNames.has(name)) { usedNames.add(name); return name; }
  // Append suffix
  for (let i = 2; i < 20; i++) {
    const alt = `${String(num).padStart(3, "0")}-${label}-${i}.js`;
    if (!usedNames.has(alt)) { usedNames.add(alt); return alt; }
  }
  return `${String(num).padStart(3, "0")}-${label}-x.js`;
}

// Write utility functions block (start of IIFE body)
if (utilBlocks.length) {
  const content = [
    "// 010-runtime-utils.js — Haxe runtime helpers: string, array, number utilities",
    "// Edit here. Run `npm run build` to reassemble the full bundle.",
    "",
    utilBlocks.map(b => b.content).join("\n\n"),
  ].join("\n");
  await writeFile(join(OUT, "010-runtime-utils.js"), content + "\n");
  console.log(`Wrote 010-runtime-utils.js  (${content.split("\n").length} lines)`);
}

const fileManifest = []; // for summary

for (let gi = 0; gi < merged.length; gi++) {
  const group   = merged[gi];
  const combined = group.blocks.map(b => b.content).join("\n");
  const label   = detectLabel(combined) ?? `tree-${group.root}`;
  const num     = 20 + gi;
  const fname   = uniqueFilename(num, label);

  const classCount = group.blocks.filter(b => b.type === "class").length;
  const lineCount  = group.blocks.reduce((s, b) => s + b.lineCount, 0);
  const roots = [...new Set(group.blocks.filter(b => b.type==="class").map(b => b.treeRoot))].join(", ");

  const header = [
    `// ${fname}`,
    `// Domain: ${label}  |  ${classCount} class(es)  |  tree root(s): ${roots}`,
    `// Edit here. Run \`npm run build\` to reassemble the full bundle.`,
    "",
  ].join("\n");

  await writeFile(join(OUT, fname), header + combined + "\n");
  fileManifest.push({ fname, label, classCount, lineCount });
  process.stdout.write(`Wrote ${fname}  (${lineCount} lines, ${classCount} classes)\n`);
}

// Write constants (trailing var declarations)
if (constantBlocks.length) {
  const content = [
    "// 990-constants.js — Global constants: regex patterns, config tables, lookup arrays",
    "// Edit here. Run `npm run build` to reassemble the full bundle.",
    "",
    constantBlocks.map(b => b.content).join("\n\n"),
  ].join("\n");
  await writeFile(join(OUT, "990-constants.js"), content + "\n");
  console.log(`Wrote 990-constants.js  (${content.split("\n").length} lines)`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. Print summary
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n── Summary ──────────────────────────────────────────────────────");
console.log(`Total files:   ${fileManifest.length + 3} (preamble + utils + ${fileManifest.length} domain + constants)`);
console.log(`Total classes: ${classBlocks.length}`);
const domainCounts = {};
fileManifest.forEach(f => { domainCounts[f.label] = (domainCounts[f.label] ?? 0) + 1; });
console.log("Domains detected:");
Object.entries(domainCounts).sort((a,b) => b[1]-a[1]).forEach(([d,n]) => {
  if (n > 1) console.log(`  ${n}x ${d}`);
});
console.log("\nNext: run `npm run build` to verify the assembled output is byte-identical.");
