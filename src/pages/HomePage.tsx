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
        <title>Home</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Helmet>

    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <MyWorks />
      <Hackathons />
      <Certificates />
      <Contact />
    </main>
    </>
  );
}
