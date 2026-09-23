import { services } from '../content/portfolio';
import { Section } from './Section';

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Capabilities"
      title="Engineering capabilities I bring to software teams."
      intro="Hands-on work across backend systems, applied AI, automation, interfaces, and product prototyping — with an emphasis on inspectable behavior and maintainable boundaries."
    >
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-module" key={service.title} tabIndex={0}>
            <div className="module-topline">
              <service.icon size={24} />
              <span>Capability</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
            <div className="module-signals">
              {service.signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
