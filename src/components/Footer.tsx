import { profile } from '../content/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>{profile.name}</p>
      <span>React · TypeScript · Three.js</span>
      <a href="#home">Return to top</a>
    </footer>
  );
}
