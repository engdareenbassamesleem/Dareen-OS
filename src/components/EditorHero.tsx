import { Canvas, useFrame } from '@react-three/fiber';
import { ChevronRight } from 'lucide-react';
import { useMemo, useRef } from 'react';
import type { Group } from 'three';
import { heroCode, profile } from '../content/portfolio';
import { useCanUseWebGL, useReducedMotion } from '../utils/motion';

function FloatingName() {
  const group = useRef<Group>(null);
  const letters = useMemo(() => 'DAREEN ESLEEM'.split(''), []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.22) * 0.12;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.08;
  });

  return (
    <group ref={group}>
      {letters.map((letter, index) => {
        const x = (index - letters.length / 2) * 0.36;
        const isSpace = letter === ' ';
        return (
          <mesh key={letter + '-' + index} position={[x, Math.sin(index) * 0.06, 0]}>
            <boxGeometry args={[isSpace ? 0.08 : 0.24, 0.62, 0.08]} />
            <meshStandardMaterial
              color={isSpace ? '#11151b' : '#dce7f2'}
              emissive={isSpace ? '#050608' : '#19d8ff'}
              emissiveIntensity={isSpace ? 0 : 0.28 + index * 0.01}
              metalness={0.72}
              roughness={0.28}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0.3, 5.2], fov: 42 }} dpr={[1, 1.5]} aria-hidden="true">
      <ambientLight intensity={0.8} />
      <directionalLight position={[2.8, 2.5, 3]} intensity={1.4} />
      <pointLight position={[-2, -1, 2]} color="#19d8ff" intensity={4} />
      <FloatingName />
    </Canvas>
  );
}

export function EditorHero() {
  const reducedMotion = useReducedMotion();
  const canUseWebGL = useCanUseWebGL();

  return (
    <section id="home" className="hero-shell" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="system-pill">Mathematics → software systems → applied AI</p>
        <h1 id="home-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            View selected work <ChevronRight size={18} />
          </a>
          <a className="secondary-action" href="#contact">
            Contact me
          </a>
        </div>
      </div>

      <div className="editor-stage" aria-label="Code editor hero representing Dareen Esleem">
        <div className="editor-chrome">
          <span />
          <span />
          <span />
          <p>dareen-os/engineer.ts</p>
        </div>
        <div className="editor-grid">
          <pre className={reducedMotion ? 'code-panel reduce-motion' : 'code-panel'}>
            <code>
              {heroCode.map((line, index) => (
                <span key={line || index} style={{ ['--line' as string]: index + 1 }}>
                  <b>{String(index + 1).padStart(2, '0')}</b>
                  {line}
                </span>
              ))}
            </code>
          </pre>
          <div className="name-assembly">
            {canUseWebGL && !reducedMotion ? <HeroCanvas /> : null}
            <div className={canUseWebGL && !reducedMotion ? 'fallback-name is-enhanced' : 'fallback-name'}>
              <span>DAREEN</span>
              <span>ESLEEM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
