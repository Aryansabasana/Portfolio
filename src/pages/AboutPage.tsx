import About from '../components/About';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <>    
    <Helmet>
        <title>About Me</title>
        <meta name="description" content="Learn more about me and my journey as a developer." />
      </Helmet>

    <main className="pt-16">

      <About />
    </main>
    </>

  );
}
