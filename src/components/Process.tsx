import { process } from '../content/portfolio';
import { Section } from './Section';

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="From unclear problem to intelligent product."
      intro="A clear operating flow keeps AI work grounded in product value, implementation reality, and usable interfaces."
    >
      <ol className="process-flow">
        {process.map((step, index) => (
          <li key={step.title}>
            <div className="step-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="step-card">
              <step.icon size={22} />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
