import React, { useState } from "react";
import { Helmet } from "react-helmet";
import animation1 from "../assets/animations/firework1.json"; // Add your Lottie animation files
import animation2 from "../assets/animations/firework2.json";
import { Player } from "@lottiefiles/react-lottie-player";
import whyChooseUsImage from "../assets/images/about/post-chemical-process-diwali-fireworks-india-1.webp";
import welcomeImage from "../assets/images/about/rockets-flying-fireworks.webp";
import infrastructureImage from "../assets/images/about/fireworks-factory-infrastructure-facilities-sivakasi-tamilnadu-india.webp";
import preChemicalStageImage from "../assets/images/about/pre-process-fireworks-industries-sivakasi-india.webp";
import chemicalProcessImage from "../assets/images/about/chemical-process-diwali-fireworks-india.webp";
import postChemicalProcessImage from "../assets/images/about/post-chemical-process-diwali-fireworks-india-1.webp";
import YouTubeSection from "../components/YouTubeSection";

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const manufacturingSteps = [
    {
      title: "Infrastructure",
      content:
        "Our infrastructure is well-designed to ensure maximum safety, allowing us to manufacture high-quality fireworks in a controlled environment.",
      image: infrastructureImage,
    },
    {
      title: "Pre Chemical Stage",
      content:
        "In this stage, raw materials are inspected and prepared for the chemical process. This includes sieving, measuring, and quality checks.",
      image: preChemicalStageImage,
    },
    {
      title: "Chemical Process",
      content:
        "Our experts carefully mix the chemical components, ensuring safety and creating the vibrant effects that our fireworks are known for.",
      image: chemicalProcessImage,
    },
    {
      title: "Post Chemical Process",
      content:
        "After the chemical process, the products undergo drying, assembly, and final quality checks before packaging.",
      image: postChemicalProcessImage,
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Prince Fireworks</title>
        <meta name="description" content="Learn more about Prince Fireworks." />
      </Helmet>
      <div className="bg-[#f7f0e5] text-gray-800">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-[#1f0d46] via-[#342057] to-[#1f0d46] text-white h-[60vh] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">About Prince Fireworks</h1>
        </header>

        {/* Paragraph Section with Animation */}
        <section className="container mx-auto py-16 px-4">
          <div className="text-center">
            <p className="text-lg leading-relaxed mb-8">
              Ajanta Fireworks Industries is a 50-year-old company incepted in the year
              1974 in Sivakasi, Tamil Nadu. Under the able guidance of Late Shri A.
              Arunachala Nadar, the company emerged as one of the leading firecracker
              manufacturers in India. We are also a reputed member of the International
              Fireworks Association (IFA) & Tamil Nadu Fireworks and Amorces Manufacturers’
              Association (TANFAMA) and have a vast number of clients spread all over India.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <Player
                autoplay
                loop
                src={animation1}
                className="h-64 w-64"
              />
              <img
                src={welcomeImage}
                alt="Celebration"
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-[300px]"
              />
              <Player
                autoplay
                loop
                src={animation2}
                className="h-64 w-64"
              />
            </div>
          </div>
        </section>

        {/* Fireworks Manufacturing Process */}
        <section className="relative bg-gradient-to-r from-[#1f0d46] via-[#342057] to-[#1f0d46] text-white py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Fireworks Manufacturing Process
            </h2>
            <div className="space-y-8">
              {manufacturingSteps.map((step, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-lg p-6 shadow-lg bg-white text-gray-800 hover:bg-[#1f0d46] hover:text-white transition-transform hover:scale-105"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-xl">{step.title}</h3>
                    <span
                      className={`text-2xl transform transition-transform ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className="mt-4 leading-relaxed">
                      <p>{step.content}</p>
                      <img
                        src={step.image}
                        alt={step.title}
                        className="rounded-lg shadow-lg w-full mt-4 hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={whyChooseUsImage}
                alt="Why Choose Us"
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <ul className="space-y-4">
              <li className="text-lg">✅ Innovative Range of Crackers</li>
              <li className="text-lg">✅ Supreme Quality at Affordable Prices</li>
              <li className="text-lg">✅ Trusted Brand in Fireworks Industry</li>
              <li className="text-lg">✅ Excellent Customer Support</li>
            </ul>
          </div>
        </section>

        {/* YouTube Section */}
        <YouTubeSection />

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="italic">
                  "Prince Fireworks made our festival unforgettable! High-quality products and vibrant colors."
                </p>
                <h4 className="mt-4 font-bold">- Ramesh K.</h4>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="italic">
                  "Their fireworks added magic to our wedding celebration. Highly recommend!"
                </p>
                <h4 className="mt-4 font-bold">- Priya S.</h4>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="italic">
                  "Amazing variety and excellent customer service. Prince Fireworks never disappoints."
                </p>
                <h4 className="mt-4 font-bold">- Anil M.</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
