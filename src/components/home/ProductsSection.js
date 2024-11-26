import React from "react";
import traditionalImage from "../../asset/home/products/traditional.webp";
import childrenImage from "../../asset/home/products/children.webp";
import aerialImage from "../../asset/home/products/unique.webp";
import flowerImage from "../../asset/home/products/flower pots.webp";
import chakrasImage from "../../asset/home/products/ground_chakkars.webp";
import rocketImage from "../../asset/home/products/rocket.webp";
import bombsImage from "../../asset/home/products/bomb.webp";
import eliteImage from "../../asset/home/products/elite.webp";
import sparklersImage from "../../asset/home/products/sparkles.webp";
import fountainsImage from "../../asset/home/products/fountains.webp";

const ProductsSection = () => {
  const products = [
    { title: "Traditional Fireworks", image: traditionalImage, shape: "rounded-full " },
    { title: "Children Fancy Fireworks", image: childrenImage, shape: "rounded-md" },
    { title: "Unique Aerial Fireworks", image: aerialImage, shape: "rounded-md rounded-tl-[200px] rounded-bl-[200px]" },
    { title: "Flower Pots", image: flowerImage, shape: "rounded-lg rounded-br-[120px] rounded-tl-[120px]" },
    { title: "Fountains", image: fountainsImage, shape: "rounded-lg rounded-tr-[100px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px]" },
    { title: "Ground Chakras", image: chakrasImage, shape: "rounded-full" },


    { title: "Rocket Crackers", image: rocketImage, shape: "rounded-md" },
    { title: "Bombs", image: bombsImage, shape: "rounded-md rounded-tl-[200px] rounded-bl-[200px]" },
    { title: "Elite Fireworks", image: eliteImage, shape: "rounded-lg rounded-br-[120px] rounded-tl-[120px]" },
    { title: "Sparklers", image: sparklersImage, shape: "rounded-lg rounded-tr-[100px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px]" },
  ];  

  return (
    <div className="bg-gray-100 py-10 px-6 rounded sm:px-8 lg:px-10 text-center">
      {/* Title: Products We Offer */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Products We Offer</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg sm:text-xl">
        We offer traditional crackers, Elite Fireworks, Fountain Crackers, Aerial Novelties, Gift Boxes & much more.
      </p>

      {/* Subtitle: Our Latest Products */}
      <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">Our Latest Products</h3>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <div className={`relative overflow-hidden shadow-md ${product.shape}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto"
              />
              <div className="absolute right-0 bottom-0 w-full h-full border-r-4 border-b-4 border-[#09B1AB]"></div>
            </div>
            
            <h3 className="mt-2 text-lg sm:text-xl text-gray-700">{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
