// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
//
// Lovable targets Cloudflare Workers by default. On Vercel we disable that bundle and use Nitro
// with the `vercel` preset (https://vercel.com/docs/frameworks/full-stack/tanstack-start).
//
// Rely on VERCEL_ENV (always set on Vercel builds) — not only VERCEL=1, which can be missing when
// the config module is first evaluated in some runners.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

function useVercelNitro(): boolean {
  if (process.env.USE_NITRO === "1") return true;
  if (process.env.VERCEL === "1" || process.env.VERCEL === "true") return true;
  const vercelEnv = process.env.VERCEL_ENV;
  if (typeof vercelEnv === "string" && vercelEnv.length > 0) return true;
  return false;
}

const isVercel = useVercelNitro();

export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  // Nitro v3 + Vercel: prerender preview can fail; SSR at request time is enough on Vercel.
  tanstackStart: isVercel
    ? {
        prerender: {
          enabled: false,
        },
      }
    : undefined,
  plugins: isVercel ? [nitro({ preset: "vercel" })] : [],
});
