# Cloudflare Pages Deployment Guide

This guide explains how to deploy your React portfolio to Cloudflare Pages and troubleshoot common issues.

## Quick Deployment

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository
2. **Connect to Cloudflare Pages**: 
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Connect your GitHub repository
   - Use the following settings:
     - **Build command**: `npm ci && npm run build`
     - **Build output directory**: `dist`
     - **Node.js version**: `20`

## Configuration Files

### cloudflare-pages.json
This file contains Cloudflare Pages-specific configuration:
```json
{
  "$schema": "https://pages.cloudflare.com/schemas/cloudflare-pages.json",
  "build": {
    "command": "npm run build",
    "output_dir": "dist",
    "environment": {
      "NODE_VERSION": "20"
    }
  },
  "functions": {
    "nodejs_compat": true
  }
}
```

### vite.config.ts
Optimized for production builds:
- Removed development-only plugins
- Added proper build configuration
- Set correct Node.js compatibility

## Troubleshooting

### Common Issues

#### 1. "Outdated lockfile version" Error
**Problem**: Mixed package manager setup (Bun + npm)
**Solution**: 
- ✅ Removed `.bun-version` file
- ✅ **Removed `bun.lockb` file** (forced npm-only usage)
- ✅ Updated build command to use `npm ci` for clean builds
- ✅ Ensured consistent npm usage

#### 2. Build Failures
**Problem**: Missing dependencies or incompatible versions
**Solution**:
- Run `npm ci` before building
- Use Node.js version 20
- Ensure all dependencies are properly installed

#### 3. Terser Not Found
**Problem**: Vite v3+ requires Terser as optional dependency
**Solution**: Updated Vite config to use default minifier instead

## Validation

Run the deployment validation script before deploying:
```bash
node scripts/deploy-check.cjs
```

This script checks:
- ✅ package.json has required build scripts
- ✅ cloudflare-pages.json exists
- ✅ vite.config.ts is properly configured
- ✅ No conflicting package manager files
- ✅ TypeScript configuration is valid

## Build Process

1. **Clean install**: `npm ci` ensures clean dependency installation
2. **Build**: `vite build` creates optimized production build
3. **Output**: Files are generated in `dist/` directory

## Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Minification**: Enabled for production
- **Source Maps**: Disabled for production
- **Target**: ESNext for modern browsers

## Environment Variables

For Cloudflare Pages, add environment variables in the dashboard:
- `NODE_ENV=production`
- `BUILD_MODE=production`

## Support

If you encounter issues:
1. Run the validation script: `node scripts/deploy-check.cjs`
2. Check the build logs in Cloudflare Pages dashboard
3. Ensure Node.js version is set to 20
4. Verify all configuration files are present

## Files Modified for Cloudflare Pages

- ✅ **Removed `bun.lockb`** (forced npm-only usage)
- ✅ Removed `.bun-version` (conflicts with npm)
- ✅ Updated `vite.config.ts` (removed dev plugins, added build config)
- ✅ Updated `cloudflare-pages.json` (simplified build command)
- ✅ Updated `package.json` (added prebuild script)
- ✅ Created `scripts/deploy-check.cjs` (validation script)
- ✅ Created `build.config.js` (build optimization settings)
