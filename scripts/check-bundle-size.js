import fs from "node:fs";
import path from "node:path";
import { gzipSync } from "node:zlib";
import process from "node:process";

const assetsDir = path.resolve("dist/assets");
const maxSizeKB = 100;

if (!fs.existsSync(assetsDir)) {
  console.error("Build assets not found. Run npm run build first.");
  process.exit(1);
}

const jsFiles = fs
  .readdirSync(assetsDir)
  .filter((file) => file.endsWith(".js"));

if (jsFiles.length === 0) {
  console.error("No JavaScript bundle files found.");
  process.exit(1);
}

let totalGzipSize = 0;

console.log("\nJavaScript Bundle Size Report");
console.log("--------------------------------");

for (const file of jsFiles) {
  const filePath = path.join(assetsDir, file);
  const content = fs.readFileSync(filePath);
  const gzipSize = gzipSync(content).length;

  totalGzipSize += gzipSize;

  console.log(
    `${file}: ${(gzipSize / 1024).toFixed(2)} KB (gzip)`
  );
}

const totalSizeKB = totalGzipSize / 1024;

console.log("--------------------------------");
console.log(`Total: ${totalSizeKB.toFixed(2)} KB (gzip)`);
console.log(`Budget: ${maxSizeKB} KB`);

if (totalSizeKB > maxSizeKB) {
  console.error("\nFAILED: JavaScript bundle exceeds the size budget.");
  process.exit(1);
}

console.log("\nPASSED: JavaScript bundle is within the size budget.");
