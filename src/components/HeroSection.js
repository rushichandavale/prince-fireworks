import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import firework1 from "../assets/animations/firework1.json";
import firework2 from "../assets/animations/firework2.json";
import firework3 from "../assets/animations/firework3.json";
import scrollImgLeft from "../assets/images/home/home-main-4.webp";
import scrollImgRight from "../assets/images/home/ajanta-fireworks-2-1448x2048.webp";

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null); // Single state for expanded category

  // Update scroll position on page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultOptions = (animationData) => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  // Toggle expanded state for a category
  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const categories = [
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

  return (
    <div className="bg-[#f7f0e5] relative overflow-hidden py-8 lg:py-16">
      {/* Scrolling Images */}
      <div className="absolute bottom-0 right-0 flex items-end gap-[-50px]">
        {/* First Image: Moves Left to Right */}
        <div
          className="w-[120px] md:w-[180px] lg:w-[200px] transition-transform duration-[500ms] ease-in-out"
          style={{ transform: `translateX(${scrollPosition * 0.3}px)` }}
        >
          <img src={scrollImgLeft} alt="Scroll Left" className="w-full" />
        </div>
        {/* Second Image: Moves Right to Left */}
        <div
          className="w-[120px] md:w-[180px] lg:w-[200px] transition-transform duration-[300ms] ease-in-out"
          style={{ transform: `translateX(-${scrollPosition * 0.3}px)` }}
        >
          <img src={scrollImgRight} alt="Scroll Right" className="w-full" />
        </div>
      </div>

      {/* Background Lottie Animations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[150px] md:w-[250px]">
          <Lottie options={defaultOptions(firework1)} />
        </div>
        <div className="absolute bottom-[10%] left-[2%] w-[150px] md:w-[250px]">
          <Lottie options={defaultOptions(firework3)} />
        </div>
        <div className="absolute top-[5%] right-[2%] w-[150px] md:w-[250px]">
          <Lottie options={defaultOptions(firework2)} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto text-center relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black">
          Colours of <br /> Festivals
        </h1>

        {/* Categories Section */}
        <div className="max-w-lg mx-auto mt-8 space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#f7f0e5] rounded-2xl shadow-md p-4 transition-shadow hover:shadow-lg"
            >
              {/* Category Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <h2 className="text-md md:text-lg font-medium text-gray-800">
                  {category.title}
                </h2>
                <span
                  className={`text-pink-500 text-xl md:text-2xl font-bold transform transition-transform ${
                    expandedIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>

              {/* Description Section */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-sm md:text-base text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="bg-[#00b387] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-green-600">
            Download Brochure
          </button>
          <button className="bg-white text-gray-800 border px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-gray-100">
            How To Order?
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
