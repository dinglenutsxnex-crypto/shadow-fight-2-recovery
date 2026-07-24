import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const mapRoot = join(root, "res", "map");
const reportRoot = join(root, "analysis");
const outputPath = join(reportRoot, "map-report.md");

function attributes(text) {
  return Object.fromEntries(
    [...text.matchAll(/([A-Za-z][\w:-]*)="([^"]*)"/g)].map((match) => [match[1], match[2]])
  );
}

function atlasSummary(json) {
  const data = JSON.parse(json);
  const frames = Array.isArray(data.frames) ? data.frames : [];
  return {
    width: data.meta?.size?.w ?? "?",
    height: data.meta?.size?.h ?? "?",
    scale: data.meta?.scale ?? "?",
    frames: frames.length,
    names: frames.slice(0, 8).map((frame) => frame.filename).filter(Boolean)
  };
}

const files = await readdir(mapRoot);
const atlasFiles = files.filter((name) => name.endsWith(".json")).sort();
const atlasRows = [];

for (const name of atlasFiles) {
  const summary = atlasSummary(await readFile(join(mapRoot, name), "utf8"));
  atlasRows.push(
    `| \`${name}\` | ${summary.width} × ${summary.height} | ${summary.scale} | ${summary.frames} | ${summary.names.map((value) => `\`${value}\``).join(", ")} |`
  );
}

const stageXml = await readFile(join(root, "res", "stages.40f2d5b2.xml"), "utf8");
const battleRows = [];
for (const match of stageXml.matchAll(/<Battle\b([^>]*)>/g)) {
  const attr = attributes(match[1]);
  if (attr.Name || attr.Location || attr.X || attr.Y) {
    battleRows.push(`| \`${attr.Name || "unnamed"}\` | ${attr.Location || ""} | ${attr.X || ""} | ${attr.Y || ""} | ${attr.Type || ""} |`);
  }
}

const report = `# Recovered map report

Generated from the checked-in map atlases and stage XML. This is a data inspection report, not a converted Godot scene.

## Atlas inventory

| Atlas | Size | Scale | Frames | Sample frame names |
|---|---:|---:|---:|---|
${atlasRows.join("\n")}

## Battle references from stages XML

| Battle | Location | X | Y | Type |
|---|---|---:|---:|---|
${battleRows.join("\n")}

## Next conversion step

The JSON files describe atlas regions, while the matching DDS/KTX files hold the textures. A Godot importer should convert or load one supported texture format, create AtlasTexture regions from these frame rectangles, and place battle nodes using the XML coordinates.
`;

await mkdir(reportRoot, { recursive: true });
await writeFile(outputPath, report);
console.log(`Wrote ${outputPath}`);
console.log(`Found ${atlasFiles.length} map atlases and ${battleRows.length} battle references.`);