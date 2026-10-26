export function ProjectArt({ kind }: { kind: string }) {
  return (
    <div className={`project-art art-${kind}`} aria-hidden="true">
      <div className="art-grid" />
      {kind === 'flowmedic' && <div className="flow-diagram" dir="ltr">
        <div className="flow-node"><span className="node-glyph">⌁</span><small>WORKFLOW</small></div>
        <div className="flow-line"><i /></div>
        <div className="flow-node core-node"><span className="node-glyph">✳</span><small>OBSERVE</small></div>
        <div className="flow-line"><i /></div>
        <div className="flow-node"><span className="node-glyph">↗</span><small>DIAGNOSE</small></div>
        <div className="signal"><span className="status-dot" /> SYSTEM HEALTH <svg viewBox="0 0 120 24"><path d="M0 13H20L26 8L32 18L40 3L49 23L57 13H75L80 7L86 17L93 13H120" /></svg></div>
      </div>}
      {kind === 'ragsource' && <div className="retrieval-diagram" dir="ltr">
        <div className="doc-sheet back-sheet"><span /><span /><span /></div>
        <div className="doc-sheet"><small>SOURCE / 01</small><span /><span /><span /><b>[ 1 ]</b></div>
        <div className="retrieval-link">················</div>
        <div className="answer-sheet"><small>GROUNDED ANSWER</small><span /><span /><span /><b>↗ source.pdf · p.12</b></div>
      </div>}
      {kind === 'sourcedesk' && <div className="search-diagram" dir="ltr">
        <div className="mock-search"><span>⌕</span> Find the signal.<i /></div>
        <div className="search-result"><small>01</small><div><span /><span /></div><b>↗</b></div>
        <div className="search-result muted-result"><small>02</small><div><span /><span /></div><b>↗</b></div>
        <span className="search-caption">QUERY → RANK → RETRIEVE</span>
      </div>}
      {kind === 'dentivo' && <div className="clinic-diagram" dir="ltr">
        <div className="clinic-window"><div className="window-top"><i /><i /><i /><span>DENTIVO / WORKSPACE</span></div>
          <div className="clinic-content"><div className="clinic-icon">✦</div><span className="clinic-greeting">A little more human.</span><div className="chat-bubble"><span /><span /></div><div className="chat-bubble reply"><span /></div></div>
        </div>
      </div>}
      <span className="art-corner">D / EXPERIMENTS</span>
    </div>
  );
}
