import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="section-shell scroll-mt-24" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
