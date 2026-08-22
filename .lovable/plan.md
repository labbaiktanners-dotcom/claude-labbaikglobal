# Fix Cloudflare Worker deploy error: "Could not resolve #tanstack-router-entry ..."

## Diagnosis (verified against the installed packages)

The requested fix — adding `alias` entries to `wrangler.jsonc` — cannot work, and the plan below explains what does.

- The root `wrangler.jsonc` currently points `"main"` at **`src/server.ts`** (raw source).
- When `wrangler deploy` runs from the project root, wrangler's own bundler compiles `src/server.ts` directly, **outside** the Vite/TanStack build pipeline.
- That source chain reaches `@tanstack/start-server-core/createStartHandler.js`, which does `import("#tanstack-router-entry")`, `import("#tanstack-start-entry")`, and `import("#tanstack-start-plugin-adapters")`.
- Those three specifiers are **build-time virtual modules**. Only the TanStack Start Vite plugin can resolve them — it swaps them for your app's real generated router/start code during `vite build`. The only physical files behind them are intentional empty stubs (`fake-entries/*.js`: `startInstance = void 0`, `getRouter() {}`).
- So even though wrangler does support an `alias` field, aliasing these specifiers would either fail again or bundle the empty stubs — producing a deployed worker that does nothing.
- Evidence this is a manual `wrangler deploy` from the repo root, not Lovable's pipeline: the error has never appeared in the sandbox build/dev logs, the site publishes fine, and this project's build (`@lovable.dev/vite-tanstack-config` v2 + Nitro `cloudflare-module` preset) already emits a correct deploy config at `dist/server/wrangler.json`.

## Fix

Deploy the **built output**, not the source entry — and remove the footgun from the root config.

1. **`wrangler.jsonc`** — remove `"main": "src/server.ts"`. Keep `compatibility_date` / `nodejs_compat` and set a real worker `name` (`labbaikglobal`). With no source `main`, a bare `wrangler deploy` can no longer bundle `src/server.ts`; after a build, wrangler automatically follows the generated `.wrangler/deploy/config.json` pointer to `dist/server/wrangler.json`. No `alias` entries are added (they can't resolve virtual modules to real code).
2. **Deploy workflow for your own Cloudflare account** (documented to you, no new code):
   ```text
   npm run build                              # Vite + Nitro -> dist/server + dist/client
   npx wrangler deploy                        # uses generated dist/server/wrangler.json
   # or explicitly:
   npx wrangler deploy --config dist/server/wrangler.json
   ```
   The generated config already contains the bundled `main` (`dist/server/index.mjs`), the `ASSETS` binding for the static site, `nodejs_compat`, and `no_bundle` — nothing to hand-maintain.
3. **`vite.config.ts`** — correct the stale header comment that says "@cloudflare/vite-plugin builds from this"; the installed config v2 builds via Nitro. Comment-only change, no behavior impact.
4. **Verify**: run `npm run build`, confirm `dist/server/wrangler.json` is generated, and grep `dist/server/index.mjs` to confirm no `#tanstack-` imports remain.

## Notes

- Lovable's own Publish flow is unaffected — it already deploys the Nitro build output (`dist/server/wrangler.json`) and was never hitting this error.
- The worker `name` in `wrangler.jsonc` only matters for manual deploys to your own Cloudflare account; Lovable manages naming for its own publishing.

## Technical details

- Virtual module definitions: `@tanstack/start-plugin-core/src/constants.ts` (`#tanstack-start-entry`, `#tanstack-router-entry`) + `#tanstack-start-plugin-adapters`; stub files in `@tanstack/start-client-core/dist/esm/fake-entries/`.
- Build pipeline: `@lovable.dev/vite-tanstack-config@2.13.1` pushes the TanStack Start plugin then Nitro with `preset: "cloudflare-module"`, `cloudflare: { nodeCompat: true, deployConfig: true }`, output `dist/server` + `dist/client`; Nitro writes `dist/server/wrangler.json` (merging the root `wrangler.jsonc`, overriding `main`) and `.wrangler/deploy/config.json`.
