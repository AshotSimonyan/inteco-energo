import NavBar from '@/components/NavBar';
import HeroSliderThree from '@/components/HeroSliderThree';
import FeatureIconText from '@/components/FeatureIconText';
import AboutText from '@/components/AboutText';
import ServiceTabTwo from '@/components/ServiceTabTwo';
import TestimonialSlider from '@/components/TestimonialSlider';
import ProjectImageGallery from '@/components/ProjectImageGallery';
import BrandLogoSlider from '@/components/BrandLogoSlider';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';

const Page = () => {
  return (
    <div>
      {/* Hero slider */}
      <HeroSliderThree />

      {/* Feature icon text */}
      <FeatureIconText />

      {/* About text */}
      <AboutText />

      {/* Service Tab */}
      <ServiceTabTwo />

      {/* Testimonial Slider */}
      {/*<TestimonialSlider />*/}

      {/* Project image gallery */}
      <ProjectImageGallery />

      {/* Brand logo */}
      <BrandLogoSlider background='grey-bg' />
    </div>
  );
};

export default Page;
