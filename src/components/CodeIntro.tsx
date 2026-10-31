import { useEffect, useRef, useState } from 'react';
import { Check, Code2, GitBranch, Pause, Play, RotateCcw, Terminal } from 'lucide-react';

type Token = { text: string; kind?: string };
const lines: Token[][] = [
  [{ text: '// Welcome to my creative world.', kind: 'comment' }],
  [{ text: 'const ', kind: 'keyword' }, { text: 'dareen', kind: 'variable' }, { text: ' = {' }],
  [{ text: '  name', kind: 'property' }, { text: ': ' }, { text: '"Dareen Esleem"', kind: 'string' }, { text: ',' }],
  [{ text: '  role', kind: 'property' }, { text: ': ' }, { text: '"3D Design & AI Engineer"', kind: 'string' }, { text: ',' }],
  [{ text: '  foundation', kind: 'property' }, { text: ': ' }, { text: '"Mathematics"', kind: 'string' }, { text: ',' }],
  [{ text: '  creating', kind: 'property' }, { text: ': ' }, { text: '"Interactive 3D experiences"', kind: 'string' }, { text: ',' }],
  [{ text: '};' }],
  [],
  [{ text: 'function ', kind: 'keyword' }, { text: 'sayHello', kind: 'function' }, { text: '() {' }],
  [{ text: '  return ', kind: 'keyword' }, { text: '"Welcome to my world."', kind: 'string' }, { text: ';' }],
  [{ text: '}' }],
  [{ text: 'sayHello', kind: 'function' }, { text: '();' }],
];
const fullCode = lines.map(line => line.map(token => token.text).join('')).join('\n');
const length = fullCode.length;

export function CodeIntro() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [position, setPosition] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? length : 0);
  const [paused, setPaused] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const complete = position >= length;
  const playing = !complete && !paused && !reduced && visible;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => { setReduced(media.matches); if (media.matches) setPosition(length); };
    let inView = false;
    const updateVisibility = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; updateVisibility(); }, { threshold: 0.15 });
    if (wrapper.current) observer.observe(wrapper.current);
    media.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => { observer.disconnect(); media.removeEventListener('change', updateMotion); document.removeEventListener('visibilitychange', updateVisibility); };
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setPosition(value => Math.min(value + 2, length)), 32);
    return () => window.clearInterval(timer);
  }, [playing]);

  function replay() { setPaused(false); setPosition(reduced ? length : 0); }
  let offset = 0;
  return <div ref={wrapper} className={`code-editor ${playing ? 'is-typing' : ''}`} data-typing-complete={complete}>
    <div className="editor-titlebar"><div className="window-dots" aria-hidden="true"><i /><i /><i /></div><span className="editor-file"><Code2 size={14} /><span>dareen.ts</span><span className="editor-modified" aria-hidden="true">●</span></span><span className="editor-language">TypeScript</span></div>
    <div className="editor-breadcrumb" aria-hidden="true">portfolio <span>/</span> src <span>/</span> <strong>dareen.ts</strong></div>
    <pre className="sr-only">{fullCode}</pre>
    <div className="editor-code" aria-hidden="true">{lines.map((tokens, lineIndex) => {
      const lineLength = tokens.reduce((sum, token) => sum + token.text.length, 0);
      const shown = Math.max(0, Math.min(position - offset, lineLength));
      const current = position >= offset && position <= offset + lineLength && !complete;
      offset += lineLength + 1;
      let tokenOffset = 0;
      return <div className={`code-line ${current ? 'current-line' : ''}`} key={lineIndex}><span className="line-number">{String(lineIndex + 1).padStart(2, '0')}</span><code>{tokens.map((token, tokenIndex) => { const text = token.text.slice(0, Math.max(0, shown - tokenOffset)); tokenOffset += token.text.length; return <span key={tokenIndex} className={token.kind ? `syntax-${token.kind}` : undefined}>{text}</span>; })}{current && <span className="code-caret" />}{!lineLength && <span> </span>}</code></div>;
    })}</div>
    <div className="editor-terminal"><span className="terminal-heading"><Terminal size={12} /> OUTPUT</span><p><span className="terminal-prompt">❯</span>{complete ? <span className="terminal-result">Welcome to my world. <span>Let’s build something meaningful.</span></span> : <span className="terminal-waiting">{paused ? 'Introduction paused.' : 'A little about me is loading…'}</span>}</p></div>
    <div className="editor-statusbar"><span><GitBranch size={11} /> main <Check size={11} /><span>personal.portfolio</span></span><div className="intro-controls">{!complete && !reduced && <button onClick={() => setPaused(value => !value)} aria-label={paused ? 'Resume introduction' : 'Pause introduction'}>{paused ? <Play size={12} /> : <Pause size={12} />}</button>}<button onClick={replay} aria-label="Replay introduction"><RotateCcw size={12} /></button><span>UTF-8</span></div></div>
  </div>;
}
