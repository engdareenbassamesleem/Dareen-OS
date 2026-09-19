import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return reduced;
}

export function useCanUseWebGL() {
  const [canUse, setCanUse] = useState(false);

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse || window.innerWidth < 860) {
      setCanUse(false);
      return;
    }

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl');
      setCanUse(Boolean(gl));
    } catch {
      setCanUse(false);
    }
  }, []);

  return canUse;
}
