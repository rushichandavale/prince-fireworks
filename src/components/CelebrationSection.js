import React from "react";
import CountUp from "react-countup";
import celbImg from "../assets/images/celebration3.png";
import celbImg1 from "../assets/images/celebration4.gif";
import celbImg2 from "../assets/images/celebration3 - Copy.png";

const CelebrationSection = () => {
  return (
    <>
      {/* Heading Section */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center my-16 px-4 text-gray-800">
        One World. One Language of Celebration!
      </h1>


      <div className="relative bg-gradient-to-r from-[#1f0d46] via-[#342057] to-[#1f0d46] text-white py-20 px-6 overflow-hidden">
      {/* Decorative Circles */}
      {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="absolute w-[50px] h-[50px] bg-white bg-opacity-20 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
        {/* Decorative Images */}
        <img
          src={celbImg}
          alt="Celebration"
          className="absolute top-0 left-0 w-auto h-[150px] md:h-[200px] lg:h-[250px] opacity-70 object-contain"
        />
        <img
          src={celbImg}
          alt="Celebration"
          className="absolute top-0 right-0 w-auto h-[150px] md:h-[200px] lg:h-[250px] opacity-70 object-contain"
        />
        <img
          src={celbImg1}
          alt="Celebration"
          className="absolute bottom-10 left-8 w-auto h-[150px] md:h-[200px] lg:h-[250px] opacity-70 object-contain"
        />
        <img
          src={celbImg1}
          alt="Celebration"
          className="absolute bottom-10 right-8 w-auto h-[150px] md:h-[200px] lg:h-[250px] opacity-70 object-contain"
        />
        <img
          src={celbImg1}
          alt="Fireworks"
          className="absolute top-[220px] left-[50%] transform -translate-x-1/2 w-[200px] h-[150px] sm:w-[250px] sm:h-[200px] md:w-[300px] md:h-[250px] opacity-80 object-contain"
        />
        <img
          src={celbImg2}
          alt="Fireworks"
          className="absolute -top-12 left-[45%] w-[150px] h-[150px] md:w-[200px] md:h-[200px] opacity-80 object-contain"
        />

        <div className="container mx-auto text-center relative z-10">
          {/* Subtitle */}
          <div className="relative inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-sm px-6 py-3 rounded-full font-semibold mt-28 mb-16">
            WHAT MAKES US SPECIAL?
          </div>

          {/* Description */}
          <p className="text-xl md:text-3xl font-semibold max-w-md mx-auto mb-36">
            "Experience premium fireworks at unbeatable prices, where quality meets affordability in every dazzling display"
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-yellow-300 py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center relative z-10 px-6">
          {/* Products */}
          <div className="group">
            <h3 className="text-5xl md:text-6xl font-extrabold text-orange-500 group-hover:scale-105 transition transform">
              <CountUp end={250} duration={2.5} />+
            </h3>
            <p className="text-lg md:text-xl font-bold text-gray-800 mt-2">
              Products
            </p>
          </div>

          {/* Dealers */}
          <div className="group">
            <h3 className="text-5xl md:text-6xl font-extrabold text-orange-500 group-hover:scale-105 transition transform">
              <CountUp end={700} duration={2.5} />+
            </h3>
            <p className="text-lg md:text-xl font-bold text-gray-800 mt-2">
              Dealers
            </p>
          </div>

          {/* Customers */}
          <div className="group">
            <h3 className="text-5xl md:text-6xl font-extrabold text-orange-500 group-hover:scale-105 transition transform">
              <CountUp end={10000} duration={3} separator="," />+
            </h3>
            <p className="text-lg md:text-xl font-bold text-gray-800 mt-2">
              Customers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CelebrationSection;
