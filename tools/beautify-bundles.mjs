import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "readable");
const candidates = (await readdir(root))
  .filter((name) => name.endsWith(".js") && !name.endsWith(".map"))
  .sort();

await mkdir(output, { recursive: true });

function runPrettier(input, target) {
  return new Promise((resolve, reject) => {
    const child = spawn("prettier", ["--parser", "babel", "--stdin-filepath", input], {
      cwd: root,
      stdio: ["pipe", "pipe", "inherit"]
    });
    let formatted = "";
    child.stdout.on("data", (chunk) => {
      formatted += chunk;
    });
    child.on("error", reject);
    child.on("exit", async (code) => {
      if (code !== 0) {
        reject(new Error(`prettier exited with ${code}`));
        return;
      }
      await writeFile(target, formatted);
      resolve();
    });
    readFile(join(root, input))
      .then((source) => child.stdin.end(source))
      .catch(reject);
  });
}

for (const name of candidates) {
  const target = join(output, `${basename(name, ".js")}.readable.js`);
  console.log(`Formatting ${name} -> ${target}`);
  await runPrettier(name, target);
}

console.log(`Wrote ${candidates.length} readable bundle copies to ${output}`);