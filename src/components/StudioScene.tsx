import { Component, useEffect, useMemo, useRef, useState, type ReactNode, type MutableRefObject } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Group } from 'three';
import { Pause, Play, RotateCw } from 'lucide-react';
import { SceneFallback } from './SceneFallback';

type Form = 'Knot' | 'Ribbon' | 'Crystal' | 'Product' | 'Interface';
type Finish = 'Mint' | 'Violet';
class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function Sculpture({ form, finish, wireframe, playing, rotation, scroll }: { form: Form; finish: Finish; wireframe: boolean; playing: boolean; rotation: number; scroll: MutableRefObject<number> }) {
  const object = useRef<Group>(null);
  const time = useRef(0);
  const invalidate = useThree(state => state.invalidate);
  const stars = useMemo(() => new Float32Array(Array.from({ length: 150 }, (_, i) => {
    const seed = Math.sin(i * 41.73 + 5.4) * 134.9;
    return (seed - Math.floor(seed) - 0.5) * 7;
  })), []);
  useEffect(() => { invalidate(); }, [form, finish, rotation, wireframe, invalidate]);
  useFrame(({ pointer }, delta) => {
    if (!object.current) return;
    if (playing) time.current += Math.min(delta, 0.05);
    object.current.rotation.set(0.26 + (playing ? pointer.y * 0.15 : 0), rotation + time.current * 0.18 + (playing ? pointer.x * 0.18 + scroll.current * 0.75 : 0), form === 'Product' || form === 'Interface' ? 0.05 : 0.27);
    object.current.position.y = Math.sin(time.current * 0.75) * 0.1;
  });
  return <>
    <ambientLight intensity={0.9} />
    <directionalLight position={[3, 4, 5]} intensity={4.5} color="#d9fff7" />
    <directionalLight position={[-4, 1, 2]} intensity={4} color="#9d86ff" />
    <pointLight position={[0, -3, 3]} intensity={14} color="#4cf2c4" />
    <group ref={object}>
      {(form === 'Knot' || form === 'Ribbon' || form === 'Crystal') && <mesh key={form}>
        {form === 'Knot' && <torusKnotGeometry args={[0.96, 0.33, 180, 28, 2, 3]} />}
        {form === 'Ribbon' && <torusKnotGeometry args={[1.05, 0.13, 220, 18, 3, 5]} />}
        {form === 'Crystal' && <icosahedronGeometry args={[1.52, 0]} />}
        <meshPhysicalMaterial color={finish === 'Mint' ? '#74e4cb' : '#ae91ff'} metalness={0.46} roughness={0.2} clearcoat={0.85} clearcoatRoughness={0.15} flatShading={form === 'Crystal'} wireframe={wireframe} />
      </mesh>}
      {form === 'Product' && <group position={[0, -0.15, 0]}>
        <mesh><cylinderGeometry args={[0.56, 0.6, 1.55, 64]} /><meshPhysicalMaterial color={finish === 'Mint' ? '#89d9c7' : '#af9be2'} metalness={0.24} roughness={0.2} clearcoat={1} wireframe={wireframe} /></mesh>
        <mesh position={[0, 0.89, 0]}><cylinderGeometry args={[0.2, 0.2, 0.24, 36]} /><meshStandardMaterial color="#d2d9e9" metalness={0.8} roughness={0.22} wireframe={wireframe} /></mesh>
        <mesh position={[0, 1.13, 0]}><cylinderGeometry args={[0.31, 0.31, 0.32, 48]} /><meshStandardMaterial color="#17253a" metalness={0.45} roughness={0.25} wireframe={wireframe} /></mesh>
        {!wireframe && <mesh position={[0, 0, 0.592]}><planeGeometry args={[0.66, 0.58]} /><meshBasicMaterial color="#17283b" /></mesh>}
        <mesh position={[0, 0, 0.603]}><torusGeometry args={[0.14, 0.012, 8, 40]} /><meshBasicMaterial color="#c4fff0" /></mesh>
      </group>}
      {form === 'Interface' && <group>
        {[-1, 0, 1].map((index) => <group key={index} position={[index * 0.76, index * 0.44, index * -0.34]} rotation={[0.05, index * -0.13, index * 0.09]}>
          <mesh><boxGeometry args={[1.34, 0.94, 0.1]} /><meshPhysicalMaterial color={index === 0 ? (finish === 'Mint' ? '#5bcdb6' : '#a18be6') : '#243652'} roughness={0.25} metalness={0.4} clearcoat={0.8} wireframe={wireframe} /></mesh>
          {!wireframe && [0, 1, 2].map(line => <mesh key={line} position={[-0.16, 0.22 - line * 0.19, 0.056]}><planeGeometry args={[0.7 - line * 0.1, 0.035]} /><meshBasicMaterial color={index === 0 ? '#173146' : '#879fc5'} /></mesh>)}
        </group>)}
      </group>}
      <mesh rotation={[0.5, 0.6, 0.3]}><torusGeometry args={[2.08, 0.006, 6, 150]} /><meshBasicMaterial color="#a49aff" transparent opacity={0.48} /></mesh>
    </group>
    {[1.15, 1.65, 2.1].map(radius => <mesh key={radius} position={[0, -1.95, 0]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[radius, radius + 0.009, 100]} /><meshBasicMaterial color="#799cbf" transparent opacity={0.22} /></mesh>)}
    <points><bufferGeometry><bufferAttribute attach="attributes-position" count={stars.length / 3} array={stars} itemSize={3} /></bufferGeometry><pointsMaterial size={0.014} color="#a6c5e9" transparent opacity={0.6} /></points>
  </>;
}

export default function StudioScene({ study = 'form' }: { study?: 'form' | 'product' | 'spatial' }) {
  const [form, setForm] = useState<Form>(study === 'product' ? 'Product' : study === 'spatial' ? 'Interface' : 'Knot');
  const [finish, setFinish] = useState<Finish>('Mint');
  const [wireframe, setWireframe] = useState(false);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(true);
  const [contextLost, setContextLost] = useState(false);
  const [rotation, setRotation] = useState(0);
  const wrapper = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; angle: number } | null>(null);
  const scroll = useRef(0);
  const forms: Form[] = study === 'product' ? ['Product', 'Crystal'] : study === 'spatial' ? ['Interface', 'Ribbon'] : ['Knot', 'Ribbon', 'Crystal'];
  const playing = !paused && visible;
  const fallback = <SceneFallback label="An exploration of form, light, and intelligence." />;

  useEffect(() => {
    let inView = true;
    const update = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update(); });
    if (wrapper.current) observer.observe(wrapper.current);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motion = () => { if (media.matches) setPaused(true); };
    const onScroll = () => { if (wrapper.current) scroll.current = Math.max(0, Math.min(1, (window.innerHeight - wrapper.current.getBoundingClientRect().top) / (window.innerHeight + wrapper.current.offsetHeight))); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    media.addEventListener('change', motion);
    document.addEventListener('visibilitychange', update);
    return () => { observer.disconnect(); media.removeEventListener('change', motion); document.removeEventListener('visibilitychange', update); window.removeEventListener('scroll', onScroll); };
  }, []);

  return <div className="studio-scene" ref={wrapper}>
    <div className="studio-readout" aria-hidden="true"><span>FORM STUDY / 001</span><span>{form.toUpperCase()} + {finish.toUpperCase()}</span></div>
    <div className="studio-canvas" role="img" aria-label="Interactive three-dimensional sculpture"
      onPointerDown={event => { if (event.pointerType === 'mouse' && event.button !== 0) return; drag.current = { x: event.clientX, angle: rotation }; event.currentTarget.setPointerCapture(event.pointerId); }}
      onPointerMove={event => { if (drag.current) setRotation(drag.current.angle + (event.clientX - drag.current.x) * 0.009); }}
      onPointerUp={event => { drag.current = null; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
      onPointerCancel={() => { drag.current = null; }}>
      <SceneBoundary fallback={fallback}>{contextLost ? fallback : <Canvas camera={{ position: [0, 0.35, 6.5], fov: 42 }} dpr={[1, 1.5]} frameloop={playing ? 'always' : 'demand'} gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }} fallback={fallback} onCreated={({ gl }) => { gl.domElement.addEventListener('webglcontextlost', event => { event.preventDefault(); setContextLost(true); }, { once: true }); }}><Sculpture form={form} finish={finish} playing={playing} wireframe={wireframe} rotation={rotation} scroll={scroll} /></Canvas>}</SceneBoundary>
    </div>
    <div className="studio-controls"><div className="studio-shapes" role="group" aria-label="Sculpture form">{forms.map(shape => <button key={shape} onClick={() => setForm(shape)} aria-pressed={form === shape}>{shape}</button>)}</div><div className="studio-actions"><button className="icon-button" onClick={() => setRotation(value => value + Math.PI / 4)} aria-label="Rotate scene"><RotateCw size={15} /></button><button className="icon-button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play animation' : 'Pause animation'} aria-pressed={paused}>{paused ? <Play size={15} /> : <Pause size={15} />}</button></div></div>
    <div className="studio-options"><div className="studio-finishes" role="group" aria-label="Material finish">{(['Mint', 'Violet'] as Finish[]).map(material => <button key={material} aria-label={`${material} material`} aria-pressed={finish === material} className={`finish-${material.toLowerCase()}`} onClick={() => setFinish(material)} />)}<span>Material</span></div><button className="wireframe-toggle" onClick={() => setWireframe(value => !value)} aria-pressed={wireframe}>Wireframe <span>{wireframe ? 'ON' : 'OFF'}</span></button></div>
    <p className="studio-hint">Drag to rotate. Change the form. Make it yours.</p>
    <p className="sr-only" role="status">{form} sculpture, {finish.toLowerCase()} material, {wireframe ? 'wireframe' : 'solid'} view.</p>
  </div>;
}
