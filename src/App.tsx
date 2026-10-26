import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, ArrowUp, BrainCircuit, Check, Copy, Github, Linkedin, Mail, Menu, Workflow, Code2, X } from 'lucide-react';
import { copy, profile, projects, type Category, type Language, type Project } from './content/site';
import { ProjectArt } from './components/ProjectArt';
import { SceneFallback } from './components/SceneFallback';

const NeuralScene = lazy(() => import('./components/NeuralScene'));
const sections = ['work', 'about', 'expertise'];

function initialLanguage(): Language {
  try { return localStorage.getItem('dareen-language') === 'en' ? 'en' : 'ar'; } catch { return 'ar'; }
}

function ProjectDialog({ project, lang, onClose }: { project: Project; lang: Language; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const t = copy[lang];
  const p = project[lang];
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
      <div className="dialog-copy"><p className="eyebrow">{p.label}</p><h2 id="dialog-title" dir="ltr">{project.title}</h2><span className="project-status">{p.status}</span>
        <p className="dialog-description">{p.description}</p><h3>{t.approach}</h3><p>{p.approach}</p><h3>{t.scope}</h3><p>{p.scope}</p>
        <div className="tags" dir="ltr">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="button button-primary" href={project.href} target="_blank" rel="noreferrer">{t.source}<ArrowUpRight size={18} /></a>
      </div>
    </div>
  </dialog>;
}

export default function App() {
  const [lang, setLang] = useState<Language>(initialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Category>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const [copyStatus, setCopyStatus] = useState('');
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar' ? 'دارين إسليم | مهندسة ذكاء اصطناعي' : 'Dareen Esleem | AI Engineer';
    try { localStorage.setItem('dareen-language', lang); } catch { /* The site also works with storage disabled. */ }
    setCopyStatus('');
  }, [lang]);

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
    <a href="#main" className="skip-link">{lang === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>
    <header className="site-header" id="top">
      <a className="wordmark" href="#top" aria-label="Dareen Esleem home" dir="ltr">dareen<span className="wordmark-dot">.</span><span className="wordmark-sub">AI ENGINEER</span></a>
      <nav className={`navigation ${menuOpen ? 'is-open' : ''}`} id="navigation" aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}>
        {t.nav.map((label, i) => <a key={sections[i]} href={`#${sections[i]}`} onClick={() => setMenuOpen(false)}><span className="nav-index">0{i + 1}</span>{label}</a>)}
      </nav>
      <div className="header-actions">
        <button className="language-button" onClick={() => { setLang(lang === 'ar' ? 'en' : 'ar'); setMenuOpen(false); }} aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'} lang={lang === 'ar' ? 'en' : 'ar'}>{lang === 'ar' ? 'EN' : 'عربي'}</button>
        <a className="header-contact" href="#contact">{t.contact}<ArrowUpRight size={17} /></a>
        <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu} aria-expanded={menuOpen} aria-controls="navigation">{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="tiny-cross">✳</span>{t.eyebrow}</p>
          <h1 id="hero-title">{t.title[0]}<br />{t.title[1]}<br /><em>{t.title[2]}</em><span className="title-star" aria-hidden="true">✳</span></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">{t.explore}<ArrowUpRight size={18} /></a><a className="text-link" href="#about">{t.meet}<ArrowRight size={17} className="directional" /></a></div>
        </div>
        <div className="hero-visual">
          <div className="scene-heading"><span className="status-dot" /><span>{t.sceneLabel}</span><span className="scene-coordinate" dir="ltr">x: 0.72 / y: 0.38</span></div>
          <Suspense fallback={<SceneFallback label={t.fallback} />}><NeuralScene lang={lang} /></Suspense>
          <div className="visual-caption"><span>INTELLIGENCE, INTERCONNECTED.</span><span>FIG. 001 ↗</span></div>
        </div>
        <a className="scroll-cue" href="#work"><ArrowDown size={16} /><span>{t.scroll}</span></a>
        <span className="hero-edition" dir="ltr">PERSONAL PORTFOLIO / 2026</span>
      </section>

      <div className="manifesto-strip">{t.strip.map(item => <span key={item}><i aria-hidden="true">✦</i>{item}</span>)}</div>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-top"><div><p className="eyebrow">{t.workLabel}</p><h2 id="work-title">{t.workTitle}<br /><em>{t.workAccent}</em></h2></div><p className="section-intro">{t.workIntro}</p></div>
        <div className="project-filters" role="group" aria-label={lang === 'ar' ? 'تصفية المشاريع' : 'Filter projects'}>{(Object.keys(t.filters) as Category[]).map(category => <button key={category} className={filter === category ? 'is-active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)}>{t.filters[category]}{category === 'all' && <span>04</span>}</button>)}</div>
        <div className="project-grid" aria-live="polite">{projects.filter(project => filter === 'all' || project.category === filter).map(project => <article className="project-card" key={project.id}>
          <button className="project-image-button" onClick={() => setSelected(project)} aria-label={`${t.details}: ${project.title}`}><ProjectArt kind={project.id} /><span className="project-open"><ArrowUpRight size={22} /></span></button>
          <div className="project-meta"><p className="eyebrow">{project[lang].label}</p><span>{project[lang].status}</span></div>
          <button className="project-title-button" onClick={() => setSelected(project)}><h3 dir="ltr">{project.title}</h3><ArrowUpRight size={25} /></button>
          <p className="project-description">{project[lang].description}</p>
          <div className="tags" dir="ltr">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        </article>)}</div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="about-identity"><p className="eyebrow">{t.aboutLabel}</p><div className="identity-art" aria-hidden="true"><div className="identity-orbit orbit-one" /><div className="identity-orbit orbit-two" /><div className="identity-orbit orbit-three" /><span className="identity-monogram">D<span>.</span></span><span className="identity-note">MATH × CODE × CURIOSITY</span><span className="identity-spark">✳</span></div><p className="principle">“{t.principle}”</p></div>
        <div className="about-copy"><h2 id="about-title">{t.aboutTitle}<br /><em>{t.aboutAccent}</em></h2><p>{t.aboutBody}</p><p>{t.aboutSecond}</p><div className="about-facts"><div><span className="eyebrow">{t.education}</span><p>{t.educationValue}</p></div><div><span className="eyebrow">{t.focus}</span><p>{t.focusValue}</p></div></div><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight size={18} /></a></div>
      </section>

      <section className="section expertise-section" id="expertise" aria-labelledby="expertise-title"><div className="section-top"><div><p className="eyebrow">{t.expertiseLabel}</p><h2 id="expertise-title">{t.expertiseTitle}<br /><em>{t.expertiseAccent}</em></h2></div><span className="large-asterisk" aria-hidden="true">✳</span></div>
        <div className="expertise-list">{t.expertise.map((item, i) => { const Icon = [BrainCircuit, Workflow, Code2][i]; return <article key={item.title} className="expertise-row"><span className="expertise-number">0{i + 1}</span><div className="expertise-name"><Icon size={26} strokeWidth={1.3} /><h3>{item.title}</h3></div><p>{item.body}</p><div className="tags" dir="ltr">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>; })}</div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-orbit" aria-hidden="true" /><p className="eyebrow">{t.contactLabel}</p><h2 id="contact-title">{t.contactTitle}<br /><em>{t.contactAccent}</em></h2><p className="contact-intro">{t.contactBody}</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={18} />{t.email}<ArrowUpRight size={18} /></a><button className="copy-button" onClick={copyEmail} aria-label={t.copyEmail}>{copyStatus === t.copied ? <Check size={18} /> : <Copy size={18} />}</button></div><a className="email-address" href={`mailto:${profile.email}`} dir="ltr">{profile.email}</a><p className="copy-status" role="status">{copyStatus}</p><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} />GitHub<ArrowUpRight size={15} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn<ArrowUpRight size={15} /></a></div></section>
    </main>

    <footer className="site-footer"><a href="#top" className="footer-wordmark" dir="ltr">dareen<span>.</span></a><p>© {new Date().getFullYear()} Dareen Esleem<span>{t.footer}</span></p><a href="#top" className="back-top">{t.back}<ArrowUp size={16} /></a></footer>
    {selected && <ProjectDialog project={selected} lang={lang} onClose={() => setSelected(null)} />}
  </>;
}
