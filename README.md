# Dareen — AI Engineer

An English personal portfolio for Dareen Esleem, 3D design and AI engineer. The homepage contains a live procedural sculpture studio with three forms, two material finishes, wireframe mode, drag rotation, and pause controls. It retains her original portrait, DE monogram, animated code introduction, and existing AI/software projects.

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

- Switch between Knot, Ribbon, and Crystal forms, Mint and Violet finishes, or wireframe mode. Drag the sculpture, rotate with its accessible button, or pause animation.
- Animation starts paused for visitors who prefer reduced motion and stops rendering when the sculpture is offscreen or the tab is hidden.
- A static orbital illustration replaces the canvas if WebGL is unavailable or its context is lost.
- Filter projects and open accessible native dialogs with approach, scope, technologies, and source links.
- Email, GitHub, and LinkedIn use the profile's existing verified contact details. There is no form backend or simulated AI chat.
- Layout and navigation adapt to small screens.
- Fonts are requested from Google Fonts with system fallbacks. There are no remote 3D models or textures.

## Content

Edit `src/content/site.ts` for the profile, projects, and contact links. `src/components/CodeIntro.tsx` contains the introduction. Project descriptions and status are carried over from the original repository; they should be kept in sync with the linked source repositories. Project illustrations are stylized diagrams, not screenshots of deployed applications.

`src/components/StudioScene.tsx` owns the procedural sculpture. `src/styles.css` defines the visual system. The heavy 3D module is loaded separately from the main page.

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

## 3D Lab and project boundaries

The 3D Lab is labelled **Experimental & Concept Work**. Its procedural form, unbranded product, and spatial-interface studies are original website experiments, not client commissions. Pointer movement, dragging, and scrolling influence the scenes; reduced-motion and pause settings disable automatic motion.

Real AI projects are Dentivo AI, FlowMedic AI, and Dareen AI Lead Engine. The latter is an n8n / AI automation project described by Dareen; it has an illustrative six-step Workflow Visualization and an Explore Workflow CTA, with no repository or live-demo link.

The creative toolkit is user supplied: Spline, Three.js, React, JavaScript, HTML5 / CSS3, Figma, and AI-assisted web development tools. The site experiments themselves use Three.js and React.

## Art direction

The open sculptural hero is the visual focal point, supported by Dareen's oversized name. The animated introduction lives in its own section and starts when it becomes visible. Lead Engine is a featured workflow case study, followed by Dentivo and FlowMedic as a pair. The portrait, original project facts, lab labels, accessibility controls, and external-link boundaries are preserved.
