# Jerry Deng — Portfolio

Source for [jerrydengdmr.github.io](https://jerrydengdmr.github.io).

A responsive engineering portfolio focused on backend systems, AI agent
reliability, and applied machine learning. The project is statically exported
with Next.js and deployed through GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

## Validate the static export

```bash
npm run build:pages
```

The deployment workflow publishes the generated `out/` directory to GitHub
Pages on every push to `main`.
