import React, { useState, useRef } from "react";
import innovativeImg from "../assets/images/rockets-flying-fireworks.webp";
import bombImg from "../assets/images/bomb.webp"; // Replace with the path to the bomb image
import Lottie from "react-lottie";
import fireworkLottie from "../assets/animations/firework2.json"; // Replace with the Lottie animation file

const InnovativeFireworks = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  // Fireworks data
  const fireworksCategories = [
    {
      title: "Traditional Crackers",
      description:
        "Traditional crackers include sparklers, flowerpots, and other festive fireworks that bring joy and excitement.",
    },
    {
      title: "Elite Fireworks",
      description:
        "Elite Fireworks offer premium quality fireworks for a luxurious celebration with vibrant effects.",
    },
    {
      title: "Fountain Crackers",
      description:
        "Fountain crackers create a spectacular display of colorful sparks, ideal for all celebrations.",
    },
    {
      title: "Aerial Novelties",
      description:
        "Aerial novelties light up the sky with stunning patterns and breathtaking effects.",
    },
    {
      title: "Gift Boxes",
      description:
        "Gift boxes contain a variety of fireworks, perfect for gifting during festive seasons.",
    },
  ];

  // Toggle function for list items
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Lottie animation options
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: fireworkLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="relative bg-[#f7f0e5] py-16 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center md:flex-row">
        {/* Left Section: Image */}
        <div className="relative flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col items-center">
          <img
            src={innovativeImg}
            alt="Innovative Fireworks"
            className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
          <img
            src={bombImg}
            alt="Bomb"
            className="w-44 h-44 absolute -bottom-16 left-1/2 transform -translate-x-1/2"
          />
        </div>

        {/* Right Section: Content */}
        <div className="flex-1 relative">
          {/* Lottie Animation */}
          <div className="absolute top-0 right-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
            <Lottie options={lottieOptions} />
          </div>

          {/* Title Section: Centered */}
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <span className="bg-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-md text-sm sm:text-base">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 text-gray-800 leading-tight">
              Innovative & <br /> Diverse Fireworks
            </h2>
          </div>

          {/* Fireworks List */}
          <ul className="max-w-lg mx-auto space-y-4">
            {fireworksCategories.map((item, index) => (
              <li
                key={index}
                className={`border border-gray-300 rounded-lg shadow-md transition-all duration-300 ${
                  openIndex === index ? "bg-pink-50" : "bg-[#f9e8cc]"
                }`}
              >
                {/* Title and Toggle Button */}
                <div
                  className="flex justify-between items-center cursor-pointer p-4"
                  onClick={() => toggleOpen(index)}
                >
                  <h3 className="text-lg sm:text-xl font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <span
                    className={`text-2xl font-bold transition-transform duration-300 ${
                      openIndex === index
                        ? "text-pink-500 rotate-45"
                        : "text-gray-500 rotate-0"
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* Smooth Content Expansion */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight:
                      openIndex === index
                        ? contentRefs.current[index]?.scrollHeight + "px"
                        : "0",
                  }}
                >
                  <p className="p-4 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InnovativeFireworks;
