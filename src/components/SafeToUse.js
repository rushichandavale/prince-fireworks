import React from "react";

const SafeToUse = () => {
  return (
    <div className="bg-[#f7f0e5] py-16 px-6 md:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Safe to Use</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          All our fireworks are manufactured with utmost safety measures, ensuring
          eco-friendliness and reduced noise pollution. Enjoy your celebrations
          responsibly with our carefully designed products.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SafeToUse;
