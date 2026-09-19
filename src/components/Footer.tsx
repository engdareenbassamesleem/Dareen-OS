import { profile } from '../content/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>{profile.name}</p>
      <span>{profile.role}</span>
      <a href="#home">Return to top</a>
    </footer>
  );
}
