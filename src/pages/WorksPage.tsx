import MyWorks from '../components/MyWorks';
import { Helmet } from 'react-helmet-async';

export default function WorksPage() {
  return (
    <>    
    <Helmet>
        <title>Works</title>
        <meta name="description" content="Explore the projects and works I've been involved in." />
      </Helmet>
    <main className="pt-16">
      <MyWorks />
    </main>
    </>
  );
}
