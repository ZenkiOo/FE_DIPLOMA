import About from '../components/About/About';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Reviews from '../components/Reviews/Reviews';

export default function HomePage() {
  return (
    <main className="home_page">
      <About />
      <HowItWorks />
      <Reviews />
    </main>
  );
}
