# Dareen OS

Personal portfolio for Dareen Esleem, focused on practical software engineering, applied AI, retrieval, workflow automation, and product interfaces.

## Stack

- React 18
- TypeScript
- Vite
- Three.js and React Three Fiber
- Framer Motion
- Tailwind tooling plus custom CSS

## Featured work

The site links to public repositories with inspectable code and documentation:

- FlowMedic AI — automation observability and incident diagnosis
- RAGSource — citation-first PDF retrieval and grounded answers
- SourceDesk — BM25-style information retrieval
- Dentivo AI — React, Firebase, and Gemini clinic-workflow prototype

## Local development

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## Deployment

The repository contains a GitHub Actions workflow for GitHub Pages and uses the Vite base path `/Dareen-OS/`.

If Pages has not yet been enabled for the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow can then publish the `dist` directory.

## Notes

This portfolio intentionally links claims to public project evidence and avoids invented client metrics or production claims. Individual repositories document their current scope and limitations.
