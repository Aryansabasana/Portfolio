import Hackathons from '../components/Hackathons';
import { Helmet } from 'react-helmet-async';

export default function HackathonsPage() {
  return (
    <>    
    <Helmet>
        <title>Hackathons</title>
        <meta name="description" content="Explore the hackathons I've participated in and the projects I've built." />
      </Helmet>
    <main className="pt-16">
      <Hackathons />
    </main>
    </>
  );
}
