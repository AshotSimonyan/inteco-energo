import HeroSliderTwo from '@/components/HeroSliderTwo';
import VideoCta from '@/components/VideoCta';
import ProjectSliderTwo from '@/components/ProjectSliderTwo';
import ServiceTab from '@/components/ServiceTab';
import TeamJob from '@/components/TeamJob';
import BrandLogoSlider from '@/components/BrandLogoSlider';

const Page = () => {
  return (
    <div>
      {/* Hero slider */}
      <HeroSliderTwo />

      {/* Video CTA */}
      <VideoCta />

      {/* Project Slider */}
      <ProjectSliderTwo />

      {/* Service Tab */}
      <ServiceTab />

      {/* Testimonial Slider */}
      {/*<TestimonialSlider />*/}

      {/* Team job */}
      <TeamJob />

      {/* Brand logo */}
      <BrandLogoSlider background='grey-bg' />
    </div>
  );
};

export default Page;
