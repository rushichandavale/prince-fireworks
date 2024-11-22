import React from "react";
import crackerImg from "../assets/images/crackers.webp";

const SafeToUse = () => {
  return (
    <div className="relative bg-[#f7f0e5] py-16 px-6 md:px-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-800 mb-16">
          Safe to Use
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-5xl mx-auto mb-16 text-lg leading-relaxed">
          Our company specializes in manufacturing a wide range of firecrackers in India. We use high-end infrastructure in the manufacturing process. Quality & innovation has always been the basic necessity of our organization. The firecrackers we offer are safe & are made from superior quality raw materials. Our team comprises qualified pyrotechnics & quality control inspectors. As we are a reputed Fireworks manufacturer, our customers spread all over India.
        </p>

        {/* See Our Products Button */}
        <button className="bg-[#01B1AB] text-white py-2 px-8 rounded-full font-bold">
          See Our Products
        </button>
      </div>

      {/* Cracker Image */}
      <div className="absolute bottom-0 right-52 transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32">
        <img
          src={crackerImg}
          alt="Cracker"
          className="w-full h-full object-contain animate-pulse"
        />
      </div>

    </div>
  );
};

export default SafeToUse;
