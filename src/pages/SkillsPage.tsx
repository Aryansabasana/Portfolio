import Skills from '../components/Skills';
import { Helmet } from 'react-helmet-async';

export default function SkillsPage() {
  return (
    <>    
    <Helmet>
        <title>Skills</title>
        <meta name="description" content="View my skills and expertise." />
      </Helmet>

    <main className="pt-16">
      <Skills />
    </main>
    </>
  );
}
