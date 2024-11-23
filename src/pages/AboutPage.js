import React from "react";
import Accordion from "../components/about/Accordion";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Testimonials from "../components/about/Testimonials";
import YouTubeSection from "../components/YouTubeSection";
import preChemicalStageImage from '../asset/about/pre_process.webp'
import infrastructureImage from '../asset/about/infrastructure.webp'
import postChemicalProcessImage from '../asset/about/post_chemical.webp'
import chemicalProcessImage from '../asset/about/chemical_process.webp'
import welcomeImage from '../asset/about/rocket-fly.webp'
import whyChooseUsImage from '../asset/about/post_chemical.webp'
import AboutHeroSection from '../components/about/AboutHeroSection';
import WelcomeSection from "../components/about/WelcomeSection";
import rocketImage from '../asset/about/rocket.webp'
import SafeToUse from "../components/home/SafeToUse";
import ZigzagDivider from './../components/ZigzagDivider';
import bomb from '../asset/home/double_bomb.webp'
import CountingStat from "../components/CountingStat";


const AboutPage = () => {
  const manufacturingSteps = [
    {
      title: "Infrastructure",
      content: "OAt Ajanta Fireworks, we have a large infrastructural unit which is located in Sivakasi itself. Sivakasi is the hub of fireworks and safety matches in India. To ensure smooth production, we have divided our team into various departments like physics, chemistry, pyrotechnic, printing, packaging technology and handcrafts. Our production process is divided into three stages which is pre-chemical process, chemical process and post chemical process.",
      image: infrastructureImage,
    },

    { title: "Pre Chemical Stage",
       content: "The pre-chemical stage involves the use of machinery such as offset printing machine, die-cutting, lamination machine and a pre-press designing department.",
        image: preChemicalStageImage },
        
    { title: "Chemical Process",
       content: "The chemical process involves the mixing, filling, fuse making and gun powder making from various raw materials like potassium nitrate, sulphur nitrate, charcoal powder and aluminium powder.", image: chemicalProcessImage },

    { title: "Post Chemical Process",
       content: "The last and the final process is the post-chemical process which is giving the crackers the final touch by making use of labelling and packaging technology, carton packaging and storage.",
        image: postChemicalProcessImage },

    { title: "Quality Control",
       content: "Every stage of production is monitored by our research and development department who constantly give their inputs to the working force. We follow a sound production policy and thus we do employ any child labour.", 
       image: postChemicalProcessImage },
  ];

 
  const testimonials = [
    {
      quote:
        "Polite admin desk. Reasonable Price. Good quality. More & More colorful varieties. Keep it up 👍.",
      author: "Karthikeyan K",
      source: "from Google Reviews",
    },
    {
      quote:
        "Best crackers in town. Amazing variety and excellent service. Highly recommended!",
      author: "Sneha R.",
      source: "from Facebook Reviews",
    },
    {
      quote: "Great customer support and quality products. Loved it!",
      author: "Rahul D.",
      source: "from Twitter",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <AboutHeroSection title="About Prince Fireworks" />
      <WelcomeSection
        image={welcomeImage}
        rocketImage = {rocketImage}
        text="Ajanta Fireworks Industries is a 50-year-old company..."
      />

    <ZigzagDivider fill="#f7f0e5" triangleWidth={18} triangleHeight={13} />
       <SafeToUse
        title="Safe to Use"
        description1="Our company specialises in manufacturing a wide range of firecrackers in India. We use high-end infrastructure in the manufacturing process. Quality & innovation has always been the basic necessity of our organisation."
description2="The firecrackers we offer are safe & are made from superior quality raw materials. Our team comprises qualified pyrotechnics & quality control inspectors. As we are a reputed Fireworks manufacturers, our customers spread all over India."
buttonText = "See Our Products"
        image= {bomb}
        imagePosition="left"
        backgroundColor="#f7f0e5"  // Example for different background color
        buttonColor="#01B1AB"  // Example for different button color
        headingColor=""  // Example for different heading color
      />
      <Accordion steps={manufacturingSteps} />
      <div className="relative bg-yellow-300 py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center relative z-10 px-6">
          <CountingStat
            end={250}
            duration={2.5}
            label="Products"
            color="text-orange-500"
          />
          <CountingStat
            end={700}
            duration={2.5}
            label="Dealers"
            color="text-orange-500"
          />
          <CountingStat
            end={10000}
            duration={3}
            separator=","
            label="Customers"
            color="text-orange-500"
          />
        </div>
      </div>
      <WhyChooseUs
        image={whyChooseUsImage}
        points={[
          "Innovative Range of Crackers",
          "Supreme Quality at Affordable Prices",
          "Trusted Brand in Fireworks Industry",
          "Excellent Customer Support",
        ]}
      />
      <YouTubeSection />
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default AboutPage;
