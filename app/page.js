import HeroSliderOne from '@/components/HeroSliderOne';
import ServiceGridSlider from '@/components/ServiceGridSlider';
import VideoCta from '@/components/VideoCta';
import FeatureIcon from '@/components/FeatureIcon';

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
    </div>
  );
};

export default Home;
