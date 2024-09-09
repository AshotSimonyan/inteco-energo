import HeroSliderOne from '@/components/HeroSliderOne';
import ServiceGridSlider from '@/components/ServiceGridSlider';
import VideoCta from '@/components/VideoCta';
import FeatureIcon from '@/components/FeatureIcon';
import AboutText from '@/components/AboutText';

const Home = () => {
  return (
    <div>
      {/* Hero slider */}
      <HeroSliderOne />

      {/* Service grid slider */}
      <ServiceGridSlider />

      {/* Video CTA */}
      <VideoCta />

      {/* Feature Icon */}
      <FeatureIcon />
      <AboutText />
    </div>
  );
};

export default Home;