# Dareen — AI Engineer

An English personal portfolio for Dareen Esleem, built around her identity: a custom DE code monogram, her supplied portrait, and an animated TypeScript introduction that types her name and a welcome message. A Three.js neural sculpture, project case studies, and direct contact links complete the experience.

## Stack

- React 18
- TypeScript
- Vite
- Three.js and React Three Fiber
- Custom responsive CSS and Lucide icons

## Experience

- An English-only welcome and content, including for returning visitors with the previous Arabic language preference.
- The custom vector logo is in `public/dareen-logo.svg` and reused in the header, portrait card, footer, and favicon. Its D/E monogram combines code brackets and a connected node.
- The original portrait is published at `public/dareen-esleem.jpg`. It is displayed with CSS framing, without image retouching.
- The introduction types once, with pause/resume and replay controls. Reduced-motion visitors immediately see the full text. This is a visual introduction, not executable visitor-supplied code.

- Switch the sculpture between a neural sphere and an orbital field; drag it, rotate with the keyboard-accessible button, or pause animation.
- Animation starts paused for visitors who prefer reduced motion and stops rendering when the sculpture is offscreen or the tab is hidden.
- A static orbital illustration replaces the canvas if WebGL is unavailable or its context is lost.
- Filter projects and open accessible native dialogs with approach, scope, technologies, and source links.
- Email, GitHub, and LinkedIn use the profile's existing verified contact details. There is no form backend or simulated AI chat.
- Layout and navigation adapt to small screens.
- Fonts are requested from Google Fonts with system fallbacks. There are no remote 3D models or textures.

## Content

Edit `src/content/site.ts` for the profile, projects, and contact links. `src/components/CodeIntro.tsx` contains the introduction. Project descriptions and status are carried over from the original repository; they should be kept in sync with the linked source repositories. Project illustrations are stylized diagrams, not screenshots of deployed applications.

`src/components/NeuralScene.tsx` owns the procedural sculpture. `src/styles.css` defines the visual system. The heavy 3D module is loaded separately from the main page.

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

## Browser verification

After building, run `npx playwright install chromium` and `node .github/scripts/browser-check.mjs`. This starts and closes a local preview automatically. It checks the English-only page, portrait loading, introduction animation and its controls, the WebGL canvas, project filtering and dialogs, clipboard behavior, mobile widths, reduced motion, and the WebGL fallback. Screenshots and the report are written to the ignored `playwright-artifacts/` directory. GitHub Actions runs the same checks and attaches the images as `portfolio-previews` before deployment.

## Deployment

The repository contains a GitHub Actions workflow for GitHub Pages and uses the Vite base path `/Dareen-OS/`.

If Pages has not yet been enabled for the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow can then publish the `dist` directory.

## Notes

This portfolio intentionally links claims to public project evidence and avoids invented client metrics or production claims. Individual repositories document their current scope and limitations.
