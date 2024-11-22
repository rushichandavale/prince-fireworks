import React from "react";

const CelebrationSection = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          One World. One Language of Celebration!
        </h1>
      </div>

      {/* Background Section */}
      <div
        className="relative bg-cover bg-center text-white py-16 px-6"
        style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/401923.jpg)`,
        }}
      >
        {/* Subtitle */}
        <div className="container mx-auto text-center">
          <div className="relative inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-sm px-6 py-3 rounded-full font-semibold mb-10">
            WHAT MAKES US SPECIAL?
          </div>

          {/* Description */}
          <p className="text-3xl font-semibold max-w-md mx-auto mb-12">
          "Experience premium fireworks at unbeatable prices, where quality meets affordability in every dazzling display"
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="relative bg-yellow-300 py-16"
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2017/08/30/23/30/fireworks-2695476_1280.jpg)`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto flex justify-center space-x-16">
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
            <h3 className="text-6xl font-extrabold text-orange-500">
              10,000+
            </h3>
            <p className="text-xl font-bold text-gray-800 mt-2">Customers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CelebrationSection;
