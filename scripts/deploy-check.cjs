#!/usr/bin/env node

/**
 * Deployment validation script for Cloudflare Pages
 * Run this before deploying to catch potential issues
 */

const fs = require("fs");
const path = require("path");

console.log("🔍 Running deployment validation checks...\n");

// Check 1: Verify package.json exists and has required scripts
const packageJsonPath = path.join(__dirname, "../package.json");
if (!fs.existsSync(packageJsonPath)) {
  console.error("❌ package.json not found");
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

if (!packageJson.scripts.build) {
  console.error("❌ Missing build script in package.json");
  process.exit(1);
}

console.log("✅ package.json validation passed");

// Check 2: Verify cloudflare-pages.json exists
const cloudflareConfigPath = path.join(__dirname, "../cloudflare-pages.json");
if (!fs.existsSync(cloudflareConfigPath)) {
  console.error("❌ cloudflare-pages.json not found");
  process.exit(1);
}

console.log("✅ cloudflare-pages.json found");

// Check 3: Verify vite.config.ts exists and is properly configured
const viteConfigPath = path.join(__dirname, "../vite.config.ts");
if (!fs.existsSync(viteConfigPath)) {
  console.error("❌ vite.config.ts not found");
  process.exit(1);
}

const viteConfig = fs.readFileSync(viteConfigPath, "utf8");
if (viteConfig.includes("componentTagger")) {
  console.error("❌ Development-only plugin found in vite.config.ts");
  process.exit(1);
}

console.log("✅ vite.config.ts validation passed");

// Check 4: Verify .bun-version doesn't exist (we removed it)
const bunVersionPath = path.join(__dirname, "../.bun-version");
if (fs.existsSync(bunVersionPath)) {
  console.error(
    "❌ .bun-version file still exists - remove it for npm compatibility",
  );
  process.exit(1);
}

console.log("✅ Package manager consistency check passed");

// Check 5: Verify TypeScript configuration
const tsconfigPath = path.join(__dirname, "../tsconfig.json");
if (!fs.existsSync(tsconfigPath)) {
  console.error("❌ tsconfig.json not found");
  process.exit(1);
}

console.log("✅ TypeScript configuration found");

console.log("\n🎉 All deployment validation checks passed!");
console.log("\n📋 Next steps:");
console.log("1. Run: npm run build");
console.log("2. Test the build locally: npm run preview");
console.log("3. Deploy to Cloudflare Pages");
