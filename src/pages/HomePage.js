import InnovativeFireworks from "../components/InnovativeFireworks";
import CelebrationSection from "../components/CelebrationSection";
import SafeToUse from "../components/SafeToUse";
import BusinessEnquiry from "../components/BusinessEnquiry";
import AboutSection from './../components/AboutSection';
import HeroSection from './../components/HeroSection';
import WhyChooseUsSection from './../components/WhyChooseUsSection';
import ProductsSection from './../components/ProductsSection';
import FAQ from './../components/FAQ';
import YouTubeSection from "../components/YouTubeSection";


const HomePage = () => {
  return (
    <>
      {/* Existing components */}
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <FAQ />

      {/* New Components */}
      <InnovativeFireworks />
      <CelebrationSection />
      <SafeToUse />
      <BusinessEnquiry />
      <YouTubeSection/>
    </>
  );
};

export default HomePage;
