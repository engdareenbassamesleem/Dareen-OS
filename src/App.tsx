import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, ArrowUp, BrainCircuit, Check, Copy, Github, Linkedin, Mail, Menu, Workflow, Code2, X } from 'lucide-react';
import { copy as t, profile, projects, type Category, type Project } from './content/site';
import { ProjectArt } from './components/ProjectArt';
import { SceneFallback } from './components/SceneFallback';
import { CodeIntro } from './components/CodeIntro';
import { Logo } from './components/Logo';

const NeuralScene = lazy(() => import('./components/NeuralScene'));
const sectionIds = ['work', 'about', 'expertise'];
const portrait = `${import.meta.env.BASE_URL}dareen-esleem.jpg`;

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const node = dialog.current;
    const previousOverflow = document.body.style.overflow;
    node?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { node?.close(); document.body.style.overflow = previousOverflow; };
  }, []);
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="dialog-title" onClose={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="dialog-inner">
      <button className="icon-button dialog-close" onClick={onClose} aria-label={t.close}><X size={22} /></button>
      <ProjectArt kind={project.id} />
      <div className="dialog-copy"><p className="eyebrow">{project.label}</p><h2 id="dialog-title">{project.title}</h2><span className="project-status">{project.status}</span>
        <p className="dialog-description">{project.description}</p><h3>{t.approach}</h3><p>{project.approach}</p><h3>{t.scope}</h3><p>{project.scope}</p>
        <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="button button-primary" href={project.href} target="_blank" rel="noreferrer">{t.source}<ArrowUpRight size={18} /></a>
      </div>
    </div>
  </dialog>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Category>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const [copyStatus, setCopyStatus] = useState('');
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', closeMenu);
    return () => { window.removeEventListener('keydown', closeMenu); clearTimeout(copyTimer.current); };
  }, []);

  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus(t.copied); }
    catch { setCopyStatus(t.copyFailed); }
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyStatus(''), 4500);
  }

  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header" id="top">
      <a className="brand" href="#top" aria-label="Dareen Esleem home"><Logo /><span className="brand-name">Dareen Esleem<span>AI ENGINEER</span></span></a>
      <nav className={`navigation ${menuOpen ? 'is-open' : ''}`} id="navigation" aria-label="Main navigation">
        {t.nav.map((label, i) => <a key={sectionIds[i]} href={`#${sectionIds[i]}`} onClick={() => setMenuOpen(false)}><span className="nav-index">0{i + 1}.</span>{label}</a>)}
      </nav>
      <div className="header-actions"><a className="header-contact" href="#contact">Let’s connect<ArrowUpRight size={16} /></a><button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu} aria-expanded={menuOpen} aria-controls="navigation">{menuOpen ? <X /> : <Menu />}</button></div>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="status-dot" /> A LITTLE LOGIC. A LOT OF CURIOSITY.</p>
          <h1 id="hero-title">Hello, world.<br />I’m <span>Dareen.</span><span className="heading-dot" aria-hidden="true">_</span></h1>
          <p className="hero-role">AI Engineer <span>/</span> Software Developer</p>
          <CodeIntro />
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work<ArrowUpRight size={18} /></a><a className="text-link" href="#about">Meet the human<ArrowRight size={17} /></a></div>
        </div>
        <div className="hero-person"><figure className="portrait-card"><div className="portrait-image"><img src={portrait} width="1133" height="1280" alt="Dareen Esleem, AI engineer and software developer" fetchPriority="high" /><span className="portrait-corner" aria-hidden="true"><Logo /></span></div><figcaption><div><span className="portrait-name">Dareen Esleem</span><span className="portrait-caption">The human behind the code.</span></div><span className="portrait-sign" aria-hidden="true">&lt;DE /&gt;</span></figcaption></figure>
          <div className="personal-note"><span aria-hidden="true">✦</span><p>A mathematical mind.<br /><strong>A builder at heart.</strong></p></div>
          <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub<ArrowUpRight size={13} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn<ArrowUpRight size={13} /></a></div>
        </div>
        <a className="scroll-cue" href="#work"><ArrowDown size={16} /><span>THERE’S MORE BELOW</span></a><span className="hero-edition">DESIGNED AROUND THE PERSON, BUILT WITH CODE.</span>
      </section>
      <div className="manifesto-strip">{['Mathematics at the core', 'AI with a purpose', 'Software with a human touch'].map(item => <span key={item}><i aria-hidden="true">✧</i>{item}</span>)}</div>
      <section className="section work-section" id="work" aria-labelledby="work-title"><div className="section-top"><div><p className="eyebrow">{t.workLabel}</p><h2 id="work-title">Ideas, meet <em>implementation.</em></h2></div><p className="section-intro">{t.workIntro}</p></div>
        <div className="project-filters" role="group" aria-label="Filter projects">{(Object.keys(t.filters) as Category[]).map(category => <button key={category} className={filter === category ? 'is-active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)}>{t.filters[category]}{category === 'all' && <span>04</span>}</button>)}</div>
        <div className="project-grid" aria-live="polite">{projects.filter(project => filter === 'all' || project.category === filter).map(project => <article className="project-card" key={project.id}><button className="project-image-button" onClick={() => setSelected(project)} aria-label={`${t.details}: ${project.title}`}><ProjectArt kind={project.id} /><span className="project-open"><ArrowUpRight size={22} /></span></button><div className="project-meta"><p className="eyebrow">{project.label}</p><span>{project.status}</span></div><button className="project-title-button" onClick={() => setSelected(project)}><h3>{project.title}</h3><ArrowUpRight size={24} /></button><p className="project-description">{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>
      <section className="section about-section" id="about" aria-labelledby="about-title"><div className="about-visual"><div className="scene-heading"><span className="status-dot" /><span>MY WORLD, INTERCONNECTED</span><span className="scene-coordinate">EXP. 001</span></div><Suspense fallback={<SceneFallback label={t.fallback} />}><NeuralScene /></Suspense><p className="scene-caption">MATHEMATICS × INTELLIGENCE × CURIOSITY</p></div>
        <div className="about-copy"><p className="eyebrow">{t.aboutLabel}</p><h2 id="about-title">A mind for patterns.<br /><em>A heart for building.</em></h2><p>{t.aboutBody}</p><p>{t.aboutSecond}</p><div className="about-facts"><div><span className="eyebrow">{t.education}</span><p>{t.educationValue}</p></div><div><span className="eyebrow">{t.focus}</span><p>{t.focusValue}</p></div></div><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">More about me on LinkedIn<ArrowUpRight size={18} /></a></div>
      </section>
      <section className="section expertise-section" id="expertise" aria-labelledby="expertise-title"><div className="section-top"><div><p className="eyebrow">{t.expertiseLabel}</p><h2 id="expertise-title">Where logic becomes <em>useful.</em></h2></div><span className="expertise-brackets" aria-hidden="true">{'{ }'}</span></div><div className="expertise-list">{t.expertise.map((item, i) => { const Icon = [BrainCircuit, Workflow, Code2][i]; return <article key={item.title} className="expertise-row"><span className="expertise-number">0{i + 1}</span><div className="expertise-name"><Icon size={26} strokeWidth={1.3} /><h3>{item.title}</h3></div><p>{item.body}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>; })}</div></section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-orbit" aria-hidden="true" /><p className="eyebrow">{t.contactLabel}</p><p className="contact-code" aria-hidden="true">// your next idea starts here</p><h2 id="contact-title">Let’s build something<br /><em>worth making.</em></h2><p className="contact-intro">{t.contactBody}</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={18} />Say hello<ArrowUpRight size={18} /></a><button className="copy-button" onClick={copyEmail} aria-label={t.copyEmail}>{copyStatus === t.copied ? <Check size={18} /> : <Copy size={18} />}</button></div><a className="email-address" href={`mailto:${profile.email}`}>{profile.email}</a><p className="copy-status" role="status">{copyStatus}</p><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} />GitHub<ArrowUpRight size={15} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn<ArrowUpRight size={15} /></a></div></section>
    </main>
    <footer className="site-footer"><a href="#top" className="footer-brand" aria-label="Dareen Esleem home"><Logo /><span>Dareen Esleem<span>AI Engineer & Software Developer</span></span></a><p>© {new Date().getFullYear()} Dareen Esleem<span>Built with logic. Made personal.</span></p><a href="#top" className="back-top">Back to top<ArrowUp size={16} /></a></footer>
    {selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}
  </>;
}
