
import Header from './components/Header';
import Hero from './components/Hero';
import PillList from './components/PillList';
import TrustBlock from './components/TrustBlock';
import Features from './components/Features';
import BenefitsStrip from './components/BenefitsStrip';
import CommunityMarquee from './components/CommunityMarquee';
import DogGallery from './components/DogGallery';
import StorePitch from './components/StorePitch';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PillList />
      <TrustBlock />
      <Features />
      <BenefitsStrip />
      <CommunityMarquee />
      <DogGallery />
      <StorePitch />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;

