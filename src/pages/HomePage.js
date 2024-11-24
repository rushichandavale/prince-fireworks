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
import CountingStat from "../components/CountingStat";

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
      {/* Stats Section */}
      <div className="relative bg-[#ffefab] py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center relative z-10 px-6">
        <CountingStat
            end={250}
            duration={2.5}
            label="Products"
            color="text-[#fbbf62]"
          />
          <CountingStat
            end={700}
            duration={2.5}
            label="Dealers"
            color="text-[#fbbf62]"
          />
          <CountingStat
            end={10000}
            duration={3}
            separator=","
            label="Customers"
            color="text-[#fbbf62]"
          />
        </div>
      </div>
      <SafeToUse />
      <BusinessEnquiry />
      <YouTubeSection/>
    </>
  );
};

export default HomePage;
