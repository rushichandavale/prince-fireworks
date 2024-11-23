import InnovativeFireworks from "../components/home/InnovativeFireworks";
import CelebrationSection from "../components/home/CelebrationSection";
import SafeToUse from "../components/home/SafeToUse";
import BusinessEnquiry from "../components/BusinessEnquiry";
import AboutSection from '../components/home/AboutSection';
import HeroSection from "../components/home/HeroSection";
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import ProductsSection from '../components/home/ProductsSection';
import FAQ from "../components/FAQ";
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
