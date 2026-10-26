export function SceneFallback({ label }: { label: string }) {
  return <div className="scene-fallback" role="img" aria-label={label}>
    <div className="fallback-sphere"><i /><i /><i /><i /><i /><span>✳</span></div>
    <span className="fallback-caption">{label}</span>
  </div>;
}
