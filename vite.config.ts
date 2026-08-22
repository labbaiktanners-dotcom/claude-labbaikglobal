// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Pin the Cloudflare Worker output for builds run OUTSIDE the Lovable sandbox
  // (local machine, your own CI). Without this, a local `npm run build` lets
  // Nitro auto-detect its target and can emit a Node build (dist/server/server.js)
  // with no wrangler.json. Inside Lovable's build environment these values are
  // already enforced identically, so this changes nothing for preview/publish.
  nitro: {
    preset: "cloudflare-module",
    output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" },
    cloudflare: { nodeCompat: true, deployConfig: true },
  },
  // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
  // The build pipeline (Nitro, cloudflare-module preset) bundles from this entry.
  tanstackStart: {
    server: { entry: "server" },
  },
});
