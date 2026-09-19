import { ArrowUpRight, Gauge, Server, Workflow } from 'lucide-react';
import { projects } from '../content/portfolio';
import { Section } from './Section';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Case studies shaped like product dashboards."
      intro="These cards are honest snapshots of product directions and prototypes, without invented metrics, clients, or traction claims."
    >
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-header">
              <div>
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>
              <span>{project.status}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="dashboard-strip" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="project-dashboard">
              {project.modules.map((module, index) => {
                const Icon = [Workflow, Gauge, Server][index] ?? Workflow;
                return (
                  <div key={module}>
                    <Icon size={17} />
                    <span>{module}</span>
                  </div>
                );
              })}
            </div>
            <div className="stack-row">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a href="#contact" className="project-link">
              Discuss similar work <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
