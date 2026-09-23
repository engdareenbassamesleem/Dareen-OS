import { Github, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../content/portfolio';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Capabilities' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Dareen OS home">
        <span className="brand-glyph">D</span>
        <span>Dareen OS</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          className="icon-link"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <Github size={18} />
        </a>
        <a className="nav-cta" href={'mailto:' + profile.email}>
          <Mail size={16} />
          Get in touch
        </a>
      </nav>
    </header>
  );
}
