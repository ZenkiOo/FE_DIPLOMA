import About from '../components/About/About';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Reviews from '../components/Reviews/Reviews';
import { Element } from 'react-scroll';

export default function HomePage() {
  return (
    <main className="home_page">
      <Element name="about">
        <About />
      </Element>
      <Element name="howItWorks">
        <HowItWorks />
      </Element>
      <Element name="reviews">
        <Reviews />
      </Element>
    </main>
  );
}
