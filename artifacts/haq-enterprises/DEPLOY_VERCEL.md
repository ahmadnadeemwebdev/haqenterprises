Deployment to Vercel
====================

Recommended steps to publish `artifacts/haq-enterprises` on Vercel.

1) Push repo to Git (GitHub/GitLab/Bitbucket).

2) Import via Vercel dashboard
- Go to Vercel → New Project → Import Git Repository
- Set **Project Root** to: `artifacts/haq-enterprises`
- Build Command: `pnpm run build`
- Output Directory: `dist`
- Environment / Node: ensure **Node 18.x** (we set `engines` in package.json)
- Deploy

3) Or deploy with Vercel CLI
- Install/authorize CLI: `npm i -g vercel` then `vercel login`
- From repo root run:
  ```bash
  vercel --prod --confirm --cwd artifacts/haq-enterprises
  ```

Notes & troubleshooting
- `sharp` uses native binaries; Node 18 on Vercel is recommended.
- If build fails with native module errors, set Vercel project Node version to 18.x in Project Settings.
- After deploy, hard-refresh browser (Ctrl+F5) to see updated favicon and assets.

Optional
- Add environment variables in Vercel if needed (none required for static build).
- If you want me to generate a `favicon.ico` multi-size file, I can provide the script; you'll need to run it locally (requires `node` + `pnpm`).

If you want, I can guide you step-by-step while you import to Vercel, or prepare a one-line CLI command to run — tell me which.
