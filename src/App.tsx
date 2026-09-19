import { About } from './components/About';
import { Contact } from './components/Contact';
import { EditorHero } from './components/EditorHero';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Services } from './components/Services';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <EditorHero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
