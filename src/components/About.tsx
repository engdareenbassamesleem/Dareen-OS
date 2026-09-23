import { Cpu, Orbit, ShieldCheck } from 'lucide-react';
import { Section } from './Section';
import { designSignals, skills } from '../content/portfolio';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Mathematics-trained, software-focused, and comfortable with hard problems."
      intro="My background in mathematics shapes how I break down ambiguity, reason about systems, and test assumptions. I now apply that mindset to backend engineering, applied AI, automation, and product interfaces."
    >
      <div className="about-layout">
        <div className="about-story">
          <p>
            I studied Mathematics at the Islamic University of Gaza and build portfolio projects that
            can be inspected through their code, tests, architecture, and documented limitations. I am
            especially interested in software engineering roles where analytical thinking and practical
            product development meet.
          </p>
          <div className="principles-grid">
            {[
              {
                icon: Cpu,
                title: 'First principles',
                body: 'I reduce a problem to inputs, constraints, invariants, and observable behavior before choosing a solution.',
              },
              {
                icon: Orbit,
                title: 'System thinking',
                body: 'I care about data flow, interfaces, failure states, and how individual components behave together.',
              },
              {
                icon: ShieldCheck,
                title: 'Evidence over claims',
                body: 'I prefer reproducible demos, tests, source links, and explicit limitations over invented metrics or vague promises.',
              },
            ].map((item) => (
              <article key={item.title} className="principle-card">
                <item.icon size={22} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="data-orbit" aria-label="Technical profile summary">
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
