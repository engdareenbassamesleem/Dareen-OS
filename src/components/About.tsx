import { Cpu, Orbit, ShieldCheck } from 'lucide-react';
import { Section } from './Section';
import { designSignals, skills } from '../content/portfolio';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering with taste, clarity, and useful intelligence."
      intro="I build at the intersection of AI, product design, and software engineering, with a bias for systems that are understandable, editable, and genuinely helpful."
    >
      <div className="about-layout">
        <div className="about-story">
          <p>
            Dareen OS is the portfolio layer for my work: a focused environment where ideas become
            workflows, interfaces, and AI-assisted products. My approach starts with the problem, then
            shapes the data, interaction model, and technical system around it.
          </p>
          <div className="principles-grid">
            {[
              { icon: Cpu, title: 'Systems first', body: 'I connect logic, data, and experience before polishing the surface.' },
              { icon: Orbit, title: 'Calm intelligence', body: 'AI should reduce ambiguity, not add theatrics or hidden complexity.' },
              { icon: ShieldCheck, title: 'Practical craft', body: 'Accessible interfaces, honest scope, maintainable code, and clear tradeoffs.' },
            ].map((item) => (
              <article key={item.title} className="principle-card">
                <item.icon size={22} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="data-orbit" aria-label="AI and data inspired visual">
          {designSignals.map((signal) => (
            <div key={signal.label} className="signal-row">
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
            </div>
          ))}
          <div className="orbit-core">OS</div>
        </div>
      </div>
      <div className="skill-cloud" aria-label="Skills and tools">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </Section>
  );
}
