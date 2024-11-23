import React from "react";
import celbImg from "../../asset/home/celebration3.png";
import celbImg1 from "../../asset/home/celebration4.gif";
import celbImg2 from "../../asset/home/celebration3 - Copy.png";

const AboutHeroSection = ({ title }) => (
  <header className="relative bg-gradient-to-r from-[#1f0d46] via-[#342057] to-[#1f0d46] text-white h-[70vh] md:h-[60vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
    {/* Decorative Floating Circles */}
    {[...Array(10)].map((_, index) => (
      <div
        key={index}
        className="absolute w-[40px] h-[40px] bg-white bg-opacity-20 rounded-full blur-sm animate-float"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      ></div>
    ))}

    {/* Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-8 z-10 px-4">
      {title}
    </h1>

    {/* Description */}
    <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed z-10 px-4">
      Ajanta Fireworks Industries is a 50-year-old company incepted in the year
      1974 in Sivakasi, Tamil Nadu. Under the able guidance of Late Shri A.
      Arunachala Nadar, the company emerged as one of the leading firecracker
      manufacturers in India. We are also a reputed member of the International
      Fireworks Association (IFA) & Tamil Nadu Fireworks and Amorces
      Manufacturers’ Association (TANFAMA) and have a vast number of clients
      spread all over India.
    </p>

    {/* Decorative Images */}
    <img
      src={celbImg}
      alt="Celebration"
      className="absolute top-0 left-0 w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] opacity-80 object-contain"
    />
    <img
      src={celbImg}
      alt="Celebration"
      className="absolute top-0 right-0 w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] opacity-80 object-contain"
    />
    <img
      src={celbImg1}
      alt="Celebration"
      className="absolute bottom-10 left-8 w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] opacity-80 object-contain"
    />
    <img
      src={celbImg1}
      alt="Celebration"
      className="absolute bottom-10 right-8 w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] opacity-80 object-contain"
    />
    <img
      src={celbImg1}
      alt="Fireworks"
      className="absolute top-[200px] left-[50%] transform -translate-x-1/2 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] opacity-90 object-contain"
    />
    <img
      src={celbImg2}
      alt="Fireworks"
      className="absolute -top-12 left-[50%] transform -translate-x-1/2 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[250px] opacity-90 object-contain"
    />
  </header>
);

export default AboutHeroSection;
