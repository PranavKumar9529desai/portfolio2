# Agent Preferences

- Do NOT run `pnpm run build` or any build command unless explicitly told to.
- Do NOT run linters or typecheckers unless asked.
- Make file edits directly without verifying via build.

## Deploy Verification (post-push)

After pushing to `origin/main`, Vercel auto-deploys `pranavkd.in`. Verify prod is live:

1. Wait ~5 minutes post-push for the deploy to finish.
2. Fetch `https://pranavkd.in/` and assert the hero paragraph contains `Software Engineer at Accenture` and `Computer Science graduate` and does NOT contain `4th year` or `student at Lovely Professional`.
3. Fetch `https://pranavkd.in/resume.pdf` and compare with local `public/resume.pdf` (same bytes — use `sha256sum`):
   - size/hash must match local build;
   - extracted text must contain `Computer Science graduate (B.Tech, June 2026)` and `CGPA`;
   - extracted text must NOT contain icon-glyph garbage (`ƒ`, `§`, `€`).
4. Check `<meta name="description">` contains `Software Engineer and Computer Science graduate`.
5. Report PASS/FAIL per check. On FAIL, re-check in 2-3 min (deploy may still run) before investigating.

Verification is read-only: fetch and compare. No builds/lints needed (see preferences above).
