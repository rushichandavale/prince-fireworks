import React from "react";
import celbImg from '../assets/images/celebration3.png'
import celbImg2 from '../assets/images/celebration2.png'
// import celbImg3 from '../assets/images' // Add more images
import celbImg4 from '../assets/images/celebration4.gif' // Add more images

const CelebrationSection = () => {
  return (
    <>
      {/* Heading Section */}
      <h1 className="text-5xl font-extrabold text-center my-20 ">
        One World. One Language of Celebration!
      </h1>

      {/* Background Section with Color */}
      <div className="relative bg-[#1f0d46] text-white py-16 px-6">
        {/* First 2 Images Positioned at the Top */}
        <img
          src={celbImg}
          alt="Celebration"
          className="absolute top-0 left-0 w-auto h-[200px] opacity-70 sm:h-[250px] md:h-[300px] lg:h-[350px] object-contain"
        />
        <img
          src={celbImg}
          alt="Celebration"
          className="absolute top-0 right-0 w-auto h-[200px] opacity-70 sm:h-[250px] md:h-[300px] lg:h-[350px] object-contain"
        />
        
        {/* Add More Images */}
        {/* <img
          src={celbImg}
          alt="Fireworks"
          className="absolute  left-[30%] w-auto h-[250px] opacity-40 sm:h-[300px] md:h-[350px] lg:h-[400px] object-contain"
        /> */}
        <img
          src={celbImg4}
          alt="Fireworks"
          className="absolute top-[250px] right-[40%] w-auto h-[250px] opacity-40 sm:h-[300px] md:h-[350px] lg:h-[400px] object-contain"
        />

        <div className="container mx-auto text-center relative z-10">
          {/* Subtitle */}
          <div className="relative inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-sm px-6 py-3 rounded-full font-semibold mt-28 mb-16">
            WHAT MAKES US SPECIAL?
          </div>

          {/* Description */}
          <p className="text-3xl font-semibold max-w-lg mx-auto mb-12">
            "Experience premium fireworks at unbeatable prices, where quality meets affordability in every dazzling display"
          </p>
        </div>
      </div>

      {/* Stats Section with Image Around */}
      <div className="relative bg-yellow-300 py-16">
        {/* Add Image Around Stats */}
        <img
          src={celbImg2}
          alt="Fireworks"
          className="absolute top-0 left-0 w-full h-auto opacity-30 sm:h-[250px] md:h-[300px] lg:h-[350px] object-contain"
        />
        <div className="container mx-auto flex justify-center space-x-16 relative z-10">
          {/* Products */}
          <div className="text-center">
            <h3 className="text-6xl font-extrabold text-orange-500">250+</h3>
            <p className="text-xl font-bold text-gray-800 mt-2">Products</p>
          </div>

          {/* Dealers */}
          <div className="text-center">
            <h3 className="text-6xl font-extrabold text-orange-500">700+</h3>
            <p className="text-xl font-bold text-gray-800 mt-2">Dealers</p>
          </div>

          {/* Customers */}
          <div className="text-center">
            <h3 className="text-6xl font-extrabold text-orange-500">10,000+</h3>
            <p className="text-xl font-bold text-gray-800 mt-2">Customers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CelebrationSection;
