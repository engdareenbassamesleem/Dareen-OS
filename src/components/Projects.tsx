import { ArrowUpRight, Gauge, Server, Workflow } from 'lucide-react';
import { projects } from '../content/portfolio';
import { Section } from './Section';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects with code you can inspect."
      intro="The projects below are portfolio and learning builds. Their repositories document setup, current behavior, tests, and limitations so the technical evidence stays easy to verify."
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
            <a
              href={project.href}
              className="project-link"
              target="_blank"
              rel="noreferrer"
              aria-label={'View ' + project.title + ' repository on GitHub'}
            >
              View repository <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
