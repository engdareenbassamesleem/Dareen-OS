import { process } from '../content/portfolio';
import { Section } from './Section';

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="How I work"
      title="From ambiguity to working software."
      intro="I try to make each engineering step observable: understand the problem, model the system, build a small path, test the important behavior, then refine."
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
