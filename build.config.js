// Build configuration for Cloudflare Pages
module.exports = {
  // Ensure consistent Node.js version
  nodeVersion: "20",

  // Build settings
  buildCommand: "npm run build",
  outputDir: "dist",

  // Environment variables for build
  env: {
    NODE_ENV: "production",
    BUILD_MODE: "production",
  },

  // Vite-specific settings
  vite: {
    build: {
      target: "esnext",
      minify: "terser",
      sourcemap: false,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            ui: ["@radix-ui/react-*", "lucide-react"],
            utils: ["clsx", "class-variance-authority"],
          },
        },
      },
    },
  },
};
