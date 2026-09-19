import { Github, Linkedin, Mail, Send, SquareArrowOutUpRight } from 'lucide-react';
import { contactFields, profile } from '../content/portfolio';
import { Section } from './Section';

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open a system connection."
      intro="Use this interface as the editable contact layer for the portfolio. Replace placeholders as your final links become available."
    >
      <div className="contact-layout">
        <form className="contact-form" aria-label="Contact form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" autoComplete="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" autoComplete="email" />
          </label>
          <label>
            Project signal
            <select name="topic" defaultValue="AI product">
              <option>AI product</option>
              <option>Automation</option>
              <option>Web application</option>
              <option>Mobile / Flutter</option>
              <option>UI/UX system</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me what you want to build." rows={5} />
          </label>
          <button type="button">
            <Send size={17} />
            Prepare message
          </button>
        </form>

        <aside className="connection-panel" aria-label="Editable contact placeholders">
          <div className="panel-header">
            <Mail size={20} />
            <span>Connection endpoints</span>
          </div>
          {contactFields.map((field) => (
            <div className="endpoint-row" key={field.label}>
              <span>{field.label}</span>
              <a href={field.value}>{field.value}</a>
              <small>{field.helper}</small>
            </div>
          ))}
          <div className="social-actions">
            <a href={profile.linkedin}>
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a href={profile.github}>
              <Github size={17} />
              GitHub
            </a>
            <a href={profile.cv}>
              <SquareArrowOutUpRight size={17} />
              CV
            </a>
          </div>
        </aside>
      </div>
    </Section>
  );
}
