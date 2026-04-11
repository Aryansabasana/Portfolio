import Education from '../components/Education';
import { Helmet } from 'react-helmet-async';

export default function EducationPage() {
  return (
    <>    
    <Helmet>
        <title>Education</title>
        <meta name="description" content="View my educational background and qualifications." />
      </Helmet>

    <main className="pt-16">
      <Education />
    </main>
   </>
  );
}
