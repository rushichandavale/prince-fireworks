import React from "react";
// Image imports
import ecoIcon from "../../assets/images/bulb.svg"; // Replace with your eco-friendly icon
import qualityIcon from "../../assets/images/star.svg"; // Replace with your quality icon
import fireworksIcon from "../../assets/images/hand.svg"; // Replace with your fireworks icon
import trustIcon from "../../assets/images/heart.svg"; // Replace with your trust icon

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Innovative Range of Crackers",
      description: "We offer crackers that redefine fireworks with inventive designs and dazzling effects.",
      icon: ecoIcon, // Add the appropriate icon
    },
    {
      title: "Supreme Quality, Affordable Prices",
      description: "All our products are of supreme quality and are available at affordable prices to everyone.",
      icon: qualityIcon, // Add the appropriate icon
    },
    {
      title: "Best Fireworks Brand in India",
      description: "We are the best fireworks brand in fountains & children fancy category with large varieties.",
      icon: fireworksIcon, // Add the appropriate icon
    },
    {
      title: "Trusted Brand since 1974",
      description: "Ajanta Fireworks is a trusted brand since 1974 & offers dedicated support service for customers.",
      icon: trustIcon, // Add the appropriate icon
    },
  ];

  return (
    <div className="container mx-auto py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800">
        Why Choose Us?
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black p-6 rounded-2xl flex flex-col items-center justify-between transition-transform transform hover:scale-105"
          >
            {/* Icon */}
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-12 h-12 mb-4"
            />
            
            {/* Title */}
            <h3 className="font-semibold text-lg md:text-xl text-center text-gray-800 mb-4 transition-colors duration-300 hover:text-pink-500">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base text-center mb-4 px-4 sm:px-2 lg:px-0">
              {feature.description}
            </p>
            
            {/* Button */}
            <a
              href="/#"
              className="inline-block text-pink-500 font-semibold text-sm border-b-2 border-pink-500 hover:text-pink-700 hover:border-pink-700 transition-all duration-300"
            >
              See Collection
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
