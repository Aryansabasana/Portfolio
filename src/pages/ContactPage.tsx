import Contact from '../components/Contact';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <>    
    <Helmet>
        <title>Contact Me</title>
        <meta name="description" content="Get in touch with me for collaborations, opportunities, or just to say hi!" />
      </Helmet>

    <main className="pt-16">
      <Contact />
    </main>
    </>
  );
}
   
