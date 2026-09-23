import { Github, Linkedin, Mail, SquareArrowOutUpRight } from 'lucide-react';
import { contactFields, profile } from '../content/portfolio';
import { Section } from './Section';

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to software engineering, applied AI, and automation opportunities."
      intro="For internships, junior roles, technical collaborations, or a project conversation, email is the fastest way to reach me. You can also inspect my work directly on GitHub."
    >
      <div className="contact-layout">
        <div className="contact-form">
          <p className="system-pill">Available for relevant opportunities</p>
          <h3>Want to talk about a role or a technical problem?</h3>
          <p className="project-description">
            I am particularly interested in teams working on real software products, backend systems,
            applied AI, automation, and multidisciplinary technical problems.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={'mailto:' + profile.email}>
              <Mail size={17} />
              Email me
            </a>
            <a className="secondary-action" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              View GitHub
            </a>
          </div>
        </div>

        <aside className="connection-panel" aria-label="Contact links">
          <div className="panel-header">
            <Mail size={20} />
            <span>Connection endpoints</span>
          </div>
          {contactFields.map((field) => (
            <div className="endpoint-row" key={field.label}>
              <span>{field.label}</span>
              <a href={field.href} target={field.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {field.value}
              </a>
              <small>{field.helper}</small>
            </div>
          ))}
          <div className="social-actions">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              GitHub
            </a>
            <a href={'mailto:' + profile.email}>
              <SquareArrowOutUpRight size={17} />
              Email
            </a>
          </div>
        </aside>
      </div>
    </Section>
  );
}
