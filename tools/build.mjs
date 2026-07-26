/**
 * build.mjs — reassembles src/sf2/*.js into sf2.4904b063.js
 *
 * File order is alphabetical (the NNN- prefix controls it).
 * 000-preamble.js goes OUTSIDE the IIFE.
 * Every other file is concatenated INSIDE the IIFE body.
 *
 * Run: node tools/build.mjs
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT   = fileURLToPath(new URL("../", import.meta.url));
const SRC    = join(ROOT, "src", "sf2");
const OUTPUT = join(ROOT, "sf2.4904b063.js");

// ── Exact IIFE wrapper preserved from the original bundle ────────────────────
const IIFE_OPEN = "(function (Ka, va) {\n";

const IIFE_CLOSE = `})(
  typeof exports != "undefined"
    ? exports
    : typeof window != "undefined"
      ? window
      : typeof self != "undefined"
        ? self
        : this,
  typeof window != "undefined"
    ? window
    : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
        ? self
        : this,
);

//# debugId=b6e40934-eb74-5a0a-971c-411d77b5b790
`;

// ── Read all source files in sort order ─────────────────────────────────────
const allFiles = (await readdir(SRC))
  .filter(f => f.endsWith(".js"))
  .sort();

if (!allFiles.length) {
  console.error("No .js files found in src/sf2/ — run `npm run split` first.");
  process.exit(1);
}

const [preambleFile, ...bodyFiles] = allFiles;

if (!preambleFile.startsWith("000-")) {
  console.error(`Expected first file to be 000-preamble.js, got: ${preambleFile}`);
  process.exit(1);
}

const preamble = await readFile(join(SRC, preambleFile), "utf8");

const bodyParts = await Promise.all(
  bodyFiles.map(f => readFile(join(SRC, f), "utf8"))
);

const body = bodyParts.join("\n");

const output = preamble.trimEnd()
  + "\n"
  + IIFE_OPEN
  + body
  + "\n"
  + IIFE_CLOSE;

await writeFile(OUTPUT, output);

const lineCount = output.split("\n").length;
console.log(`Built sf2.4904b063.js from ${allFiles.length} source files (${lineCount} lines)`);
