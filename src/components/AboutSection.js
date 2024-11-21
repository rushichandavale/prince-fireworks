import React from "react";
import starImage from "../assets/images/home-main-8.webp"; // Replace with the path to your star image
import crackerImage from "../assets/images/chakkar.webp"; // Replace with the path to your cracker image

const AboutSection = () => {
  return (
    <div className="container mx-auto py-16 px-4 relative bg-gradient-to-b from-white to-[#f7f0e5] overflow-hidden">
      {/* Title-like Button */}
      <div className="text-center mb-8">
        <span className="inline-block bg-pink-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300">
          Welcome to Prince Fireworks
        </span>
      </div>

      {/* About Us Title */}
      <h2 className="text-6xl lg:text-7xl font-extrabold text-center mb-6 text-gray-800">
        About Us
      </h2>

      {/* About Us Text */}
      <p className="text-gray-700 text-center text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
        Prince Fireworks Industries is a 50-year-old company, incepted in 1974
        in Sivakasi, Tamil Nadu. Under the able guidance of Late Shri A. Arunachala Nadar,
        the company emerged as one of the leading firecracker manufacturers in India.
        We are also a reputed member of the International Fireworks Association (IFA)
        & Tamil Nadu Fireworks and Amorces Manufacturers’ Association (TANFAMA),
        with a vast number of clients spread all over India.
      </p>

      {/* Bottom Images */}
      <div>
        {/* Star Image - Bottom Left */}
        <img
          src={starImage}
          alt="Star"
          className="absolute bottom-4 left-4 w-10 h-10 lg:w-16 lg:h-16 object-contain transform hover:scale-110 hover:rotate-6 transition-transform duration-300"
        />
        {/* Cracker Image - Bottom Right */}
        <img
          src={crackerImage}
          alt="Cracker"
          className="absolute bottom-4 right-4 w-16 h-16 lg:w-20 lg:h-20 object-contain transform hover:scale-110 hover:-rotate-6 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default AboutSection;
