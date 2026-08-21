import { readFileSync, readdirSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const translationsPath = join(root, "src/data/translations.ts");
const sourceRoot = join(root, "src");

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(path));
      continue;
    }

    if ([".astro", ".ts", ".js", ".mjs"].includes(extname(entry.name))) {
      files.push(path);
    }
  }

  return files;
}

const definedKeys = [...readFileSync(translationsPath, "utf8").matchAll(/^\s+"([^"]+)": \{/gm)].map((match) => match[1]);
const sourceBlob = walk(sourceRoot)
  .filter((path) => path !== translationsPath)
  .map((path) => readFileSync(path, "utf8"))
  .join("\n");

const unused = definedKeys.filter((key) => !sourceBlob.includes(`"${key}"`) && !sourceBlob.includes(`'${key}'`));
const usedKeys = [...sourceBlob.matchAll(/\bt\(\s*["'`]([^"'`]+)["'`]/g)].map((match) => match[1]);
const missing = [...new Set(usedKeys)].filter((key) => !definedKeys.includes(key));

if (unused.length || missing.length) {
  if (unused.length) {
    console.error(`Unused translation keys (${unused.length}):\n${unused.map((key) => `  ${key}`).join("\n")}`);
  }
  if (missing.length) {
    console.error(`Missing translation keys (${missing.length}):\n${missing.map((key) => `  ${key}`).join("\n")}`);
  }
  process.exit(1);
}

console.log(`Checked ${definedKeys.length} translation keys.`);
