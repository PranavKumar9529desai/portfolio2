# Agent Preferences

- Do NOT run `pnpm run build` or any build command unless explicitly told to.
- Do NOT run linters or typecheckers unless asked.
- Make file edits directly without verifying via build.

## Deploy & Verify (prod)

`pranavkd.in` runs on **Cloudflare Pages** — NOT auto-deployed by git push. Deploy manually:

1. Build: `pnpm run pages:build` (next-on-pages).
2. Deploy: `bunx wrangler pages deploy .vercel/output/static`
   - MUST use `bunx wrangler` — bare `wrangler` is NOT on PATH.
   - Auth = existing `wrangler login` browser session (no API token needed).
   - Project `portfolio-akd` comes from wrangler.toml `name`.
3. Wait for `Deployment complete` (preview: `https://<hash>.portfolio-akd.pages.dev`).

Then verify prod is live:

4. Fetch `https://pranavkd.in/`; assert the hero paragraph contains `Software Engineer at Accenture` and `Computer Science graduate` and does NOT contain `4th year` or `student at Lovely Professional`.
5. Fetch `https://pranavkd.in/resume.pdf` and compare with local `public/resume.pdf`:
   - `sha256sum` must match local build (reference `f38f19d1…`, 119769 bytes);
   - extracted text must contain `Computer Science graduate (B.Tech, June 2026)` and `CGPA`;
   - extracted text must NOT contain icon-glyph garbage (`ƒ`, `§`, `€`).
6. Check `<meta name="description">` contains `Software Engineer and Computer Science graduate`.
7. Report PASS/FAIL per check. On FAIL, re-check in 2-3 min (CDN cache) before investigating; static assets may need a Cloudflare cache purge.
