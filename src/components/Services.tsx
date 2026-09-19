import { services } from '../content/portfolio';
import { Section } from './Section';

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Product modules for intelligent software."
      intro="Each service is framed as a working capability, not a generic offering, so the output can become a real product surface."
    >
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-module" key={service.title} tabIndex={0}>
            <div className="module-topline">
              <service.icon size={24} />
              <span>Module</span>
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
