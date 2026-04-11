import Certificates from '../components/Certificates';
import { Helmet } from 'react-helmet-async';

export default function AwardsPage() {
  return (
    <>    
    <Helmet>
        <title>Awards</title>
        <meta name="description" content="View my awards and recognition." />
      </Helmet>

    <main className="pt-16">
      <Certificates />
    </main>
    </>

  );
}

