import { Component, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Group, Vector3 } from 'three';
import { Pause, Play, RotateCw } from 'lucide-react';
import { copy, type Language } from '../content/site';
import { SceneFallback } from './SceneFallback';

class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function createNetwork(orbital: boolean) {
  const nodes: Vector3[] = [];
  const count = 280;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const angle = goldenAngle * i;
    if (orbital) {
      const u = i / count * Math.PI * 2;
      const v = goldenAngle * i;
      nodes.push(new Vector3((1.5 + 0.45 * Math.cos(v)) * Math.cos(u), 0.45 * Math.sin(v), (1.5 + 0.45 * Math.cos(v)) * Math.sin(u)));
    } else {
      const ripple = 1.72 + Math.sin(angle * 3 + y * 7) * 0.12;
      nodes.push(new Vector3(Math.cos(angle) * radius * ripple, y * ripple, Math.sin(angle) * radius * ripple));
    }
  }
  const edges: number[] = [];
  const threshold = orbital ? 0.48 : 0.48;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < threshold) edges.push(...nodes[i].toArray(), ...nodes[j].toArray());
    }
  }
  return { points: new Float32Array(nodes.flatMap(node => node.toArray())), edges: new Float32Array(edges) };
}

function Network({ orbital, playing, turn, drag }: { orbital: boolean; playing: boolean; turn: number; drag: number }) {
  const root = useRef<Group>(null);
  const rings = useRef<Group>(null);
  const progress = useRef(0);
  const network = useMemo(() => createNetwork(orbital), [orbital]);
  const invalidate = useThree(state => state.invalidate);
  useEffect(() => { invalidate(); }, [turn, drag, orbital, invalidate]);
  useFrame(({ pointer }, delta) => {
    if (!root.current) return;
    if (playing) progress.current += Math.min(delta, 0.05);
    const targetY = progress.current * 0.075 + turn * 0.45 + drag;
    root.current.rotation.y = targetY + (playing ? pointer.x * 0.16 : 0);
    root.current.rotation.x = 0.22 + (playing ? pointer.y * 0.1 : 0);
    if (rings.current) rings.current.rotation.z = progress.current * -0.05;
  });

  return <group ref={root} rotation={[0.22, 0, -0.17]}>
    <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" count={network.edges.length / 3} array={network.edges} itemSize={3} /></bufferGeometry><lineBasicMaterial color="#b67a55" transparent opacity={0.44} /></lineSegments>
    <points><bufferGeometry><bufferAttribute attach="attributes-position" count={network.points.length / 3} array={network.points} itemSize={3} /></bufferGeometry><pointsMaterial color="#f6cfa6" size={0.028} sizeAttenuation transparent opacity={0.95} /></points>
    <mesh><icosahedronGeometry args={[orbital ? 0.57 : 1.1, 2]} /><meshBasicMaterial color="#543b2f" wireframe transparent opacity={0.3} /></mesh>
    <group ref={rings}>
      {[0, 1, 2].map(index => <mesh key={index} rotation={[Math.PI / 2 + index * 0.67, index * 0.7, index * 0.9]}>
        <torusGeometry args={[2.1 + index * 0.07, 0.0035, 5, 160]} /><meshBasicMaterial color={index === 0 ? '#efd3a9' : '#a77655'} transparent opacity={index === 0 ? 0.6 : 0.32} />
      </mesh>)}
      {[0, 1, 2, 3].map(index => { const angle = index * Math.PI * 0.5; return <mesh key={index} position={[2.12 * Math.cos(angle), 0, 2.12 * Math.sin(angle)]}><sphereGeometry args={[0.035, 10, 10]} /><meshBasicMaterial color="#ffe0b7" /></mesh>; })}
    </group>
  </group>;
}

export default function NeuralScene({ lang }: { lang: Language }) {
  const t = copy[lang];
  const [orbital, setOrbital] = useState(false);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(true);
  const [contextLost, setContextLost] = useState(false);
  const [turn, setTurn] = useState(0);
  const [drag, setDrag] = useState(0);
  const wrapper = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; angle: number } | null>(null);
  const playing = !paused && visible;
  const fallback = <SceneFallback label={t.fallback} />;

  useEffect(() => {
    let inView = true;
    const updateVisibility = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; updateVisibility(); });
    if (wrapper.current) observer.observe(wrapper.current);
    document.addEventListener('visibilitychange', updateVisibility);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motionChanged = () => { if (media.matches) setPaused(true); };
    media.addEventListener('change', motionChanged);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', updateVisibility); media.removeEventListener('change', motionChanged); };
  }, []);

  return <div className="scene-wrapper" ref={wrapper}>
    <div className="scene-glow" aria-hidden="true" />
    <div className="scene-canvas" role="img" aria-label={lang === 'ar' ? 'مجسّم تفاعلي لشبكة عصبية مترابطة' : 'Interactive three-dimensional interconnected neural network'}
      onPointerDown={event => { if (event.pointerType === 'mouse' && event.button !== 0) return; pointerStart.current = { x: event.clientX, angle: drag }; event.currentTarget.setPointerCapture(event.pointerId); }}
      onPointerMove={event => { if (pointerStart.current) setDrag(pointerStart.current.angle + (event.clientX - pointerStart.current.x) * 0.008); }}
      onPointerUp={event => { pointerStart.current = null; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
      onPointerCancel={() => { pointerStart.current = null; }}>
      <SceneBoundary fallback={fallback}>{contextLost ? fallback : <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 44 }} frameloop={playing ? 'always' : 'demand'} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }} fallback={fallback} onCreated={({ gl }) => { gl.domElement.addEventListener('webglcontextlost', event => { event.preventDefault(); setContextLost(true); }, { once: true }); }}><Network orbital={orbital} playing={playing} turn={turn} drag={drag} /></Canvas>}</SceneBoundary>
    </div>
    <span className="scene-axis axis-top" aria-hidden="true">+</span><span className="scene-axis axis-bottom" aria-hidden="true">+</span>
    <div className="scene-controls"><div className="scene-modes" role="group" aria-label={lang === 'ar' ? 'شكل المجسّم' : 'Scene shape'}><button onClick={() => setOrbital(false)} aria-pressed={!orbital} className={!orbital ? 'is-active' : ''}>{t.neural}</button><button onClick={() => setOrbital(true)} aria-pressed={orbital} className={orbital ? 'is-active' : ''}>{t.orbital}</button></div><div className="scene-buttons"><button className="icon-button" onClick={() => setTurn(turn + 1)} aria-label={t.rotate}><RotateCw size={16} /></button><button className="icon-button" onClick={() => setPaused(!paused)} aria-label={paused ? t.play : t.pause} aria-pressed={paused}>{paused ? <Play size={16} /> : <Pause size={16} />}</button></div></div>
    <p className="scene-hint">{t.drag}</p>
  </div>;
}
