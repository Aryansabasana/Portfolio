import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import MyWorks from '../components/MyWorks';
import Hackathons from '../components/Hackathons';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Aryan Sabasana | Full Stack Developer & Creative Technologist</title>
        <meta name="description" content="Portfolio of Aryan Sabasana - Full Stack Developer specializing in React, TypeScript, Node.js, and creative digital experiences. View projects, skills, hackathons, and achievements." />
      </Helmet>

      <main>
        <Hero />
        <About />
        <Skills />
        <Hackathons />
        <MyWorks />
        <Education />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}
