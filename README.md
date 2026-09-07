# Avocrave — website

A static site (plain HTML/CSS/JS, no build step) ready to deploy on Vercel.

## Files

```
avocrave/
├── index.html        ← all page content lives here (sections are labelled)
├── styles.css         ← design system (colours, type, layout)
├── script.js          ← mobile nav + photo lightbox
├── vercel.json
└── assets/
    ├── img/            ← logo, icons
    └── photos/         ← product / gallery photos 
```

## Run locally

No build step needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally (recommended, so relative image paths behave the same as in
  production):
  ```bash
  npx serve .
  ```

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts (framework: **Other**, no build command, output directory: `.`).

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a GitHub repo.
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Other**. Leave build command empty, output directory `.`.
4. Deploy.

That's it — it's a static site, so every push to your connected branch will
redeploy automatically.
