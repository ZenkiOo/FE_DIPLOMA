import About from '../components/About/About';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Reviews from '../components/Reviews/Reviews';

export default function HomePage() {
  return (
    <div className="home_page">
      <About />
      <HowItWorks />
      <Reviews />
    </div>
  );
}
