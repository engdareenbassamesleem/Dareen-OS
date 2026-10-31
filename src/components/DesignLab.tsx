import { lazy, Suspense, useState } from 'react';
import { SceneFallback } from './SceneFallback';
const StudioScene = lazy(() => import('./StudioScene'));
const studies = [
  { id: 'product', title: 'Product visualization', number: '01', description: 'An original, unbranded object study. Explore the bottle from different angles, switch the material finish, or inspect the wireframe.', tags: ['Product concept', 'Material exploration', 'Mouse response'] },
  { id: 'form', title: 'Generative form', number: '02', description: 'Procedural knots, ribbons, and crystals built with geometry. Move your pointer, drag to rotate, and scroll to gently shift the composition.', tags: ['Procedural geometry', 'Scroll response', 'Creative WebGL'] },
  { id: 'spatial', title: 'Spatial interface', number: '03', description: 'A floating interface composition exploring depth, light, and motion for an immersive landing-page concept.', tags: ['Interface concept', 'Dimensional composition', 'Interactive motion'] },
] as const;

export function DesignLab() {
  const [active, setActive] = useState<(typeof studies)[number]>(studies[0]);
  return <section className="section lab-section" id="lab" aria-labelledby="lab-title">
    <div className="section-top"><div><p className="eyebrow">01 / THE CREATIVE PLAYGROUND</p><h2 id="lab-title">3D Lab <em>— Experimental & Concept Work</em></h2></div><p className="section-intro">Original experiments built inside this portfolio. A space to explore form and interaction, separate from my real AI projects.</p></div>
    <div className="lab-tabs" role="group" aria-label="Choose a 3D experiment">{studies.map(study => <button key={study.id} aria-pressed={study.id === active.id} onClick={() => setActive(study)}><span>{study.number}</span>{study.title}</button>)}</div>
    <div className="lab-layout"><div className="lab-showcase"><div className="studio-title"><span className="status-dot" /><span>ORIGINAL CONCEPT STUDY</span><span>LIVE / 3D</span></div><Suspense fallback={<SceneFallback label="An original 3D concept study" />}><StudioScene key={active.id} study={active.id} /></Suspense></div><div className="lab-description"><p className="eyebrow">EXPERIMENT / {active.number}</p><h3>{active.title}</h3><p>{active.description}</p><div className="tags">{active.tags.map(tag => <span key={tag}>{tag}</span>)}</div><dl><div><dt>Type</dt><dd>Personal concept & exploration</dd></div><div><dt>Built with</dt><dd>Three.js, React & creative code</dd></div></dl><p className="lab-note">These scenes are experimental portfolio pieces, not client commissions or published product campaigns.</p></div></div>
  </section>;
}
