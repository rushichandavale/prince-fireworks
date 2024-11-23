import React from "react";
import traditionalImage from "../../assets/images/products/category-01.webp";
import childrenImage from "../../assets/images/products/category-02.webp";
import aerialImage from "../../assets/images/products/category-03.webp";
import flowerImage from "../../assets/images/products/category-11.webp";
import chakrasImage from "../../assets/images/products/category-05.webp";
import rocketImage from "../../assets/images/products/category-06.webp";
import bombsImage from "../../assets/images/products/category-07.webp";
import eliteImage from "../../assets/images/products/category-08.webp";
import sparklersImage from "../../assets/images/products/category-09.webp";
import fountainsImage from "../../assets/images/products/category-10.webp";

const ProductsSection = () => {
  const products = [
    { title: "Traditional Fireworks", image: traditionalImage, shape: "rounded-lg" },
    { title: "Children Fancy Fireworks", image: childrenImage, shape: "rounded-full" },
    { title: "Unique Aerial Fireworks", image: aerialImage, shape: "rounded-md" },
    { title: "Flower Pots", image: flowerImage, shape: "rounded-lg" },
    { title: "Ground Chakras", image: chakrasImage, shape: "rounded-full" },
    { title: "Rocket Crackers", image: rocketImage, shape: "rounded-md" },
    { title: "Bombs", image: bombsImage, shape: "rounded-lg" },
    { title: "Elite Fireworks", image: eliteImage, shape: "rounded-xl" },
    { title: "Sparklers", image: sparklersImage, shape: "rounded-md" },
    { title: "Fountains", image: fountainsImage, shape: "rounded-full" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-6 sm:px-8 lg:px-10 text-center">
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
            <div className={`overflow-hidden shadow-md ${product.shape}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto"
              />
            </div>
            <h3 className="mt-2 text-lg sm:text-xl text-gray-700">{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
