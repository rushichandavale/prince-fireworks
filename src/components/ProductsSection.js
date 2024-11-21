import React, { useState } from "react";
// Image imports for product categories (replace with your actual image paths)
import traditionalImage from "../assets/images/products/category-10.webp";
import eliteImage from "../assets/images/products/category-01.webp";
import fountainImage from "../assets/images/products/category-02.webp";
import aerialImage from "../assets/images/products/category-03.webp";
import giftBoxImage from "../assets/images/products/category-11.webp";
import productImage1 from "../assets/images/products/category-05.webp";
import productImage2 from "../assets/images/products/category-06.webp";
import productImage3 from "../assets/images/products/category-07.webp";
import productImage4 from "../assets/images/products/category-08.webp";
import productImage5 from "../assets/images/products/category-09.webp";

const ProductsSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const categories = [
    { title: "Traditional Fireworks", image: traditionalImage, description: "Chakkars, Flower Pots, Twinkling Stars, and Sparklers." },
    { title: "Elite Fireworks", image: eliteImage, description: "Special crackers for Diwali, including colorful chakkars and bombs." },
    { title: "Fountain Crackers", image: fountainImage, description: "Low-emission, colorful, and crackling fountains." },
    { title: "Aerial Novelties", image: aerialImage, description: "Comets and multiple-shot fireworks with stunning effects." },
    { title: "Gift Boxes", image: giftBoxImage, description: "Fancy gift boxes with assorted crackers for festive occasions." },
    { title: "Ground Chakras", image: productImage1, description: "Colorful ground firework that spins and sparkles." },
    { title: "Rocket Crackers", image: productImage2, description: "Aerial fireworks that shoot into the sky with a bang." },
    { title: "Bombs", image: productImage3, description: "Loud and bright crackers with a loud explosion." },
    { title: "Sparklers", image: productImage4, description: "Handheld firework that sparkles and glows brightly." },
    { title: "Flower Pots", image: productImage5, description: "Small fireworks that emit colorful sparks from the ground." }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Wave Effect */}
      <div className="relative bg-teal-100 py-16">
        <div className="absolute top-0 left-0 right-0 w-full h-[50px] bg-white -z-10" />
        <svg className="absolute top-0 left-0 right-0 w-full h-16 text-teal-200 fill-current -z-10">
          <path d="M0 0 C100 30 400 30 500 0 L500 75 L0 75 Z" />
        </svg>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Products We Offer</h2>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-screen-xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black rounded-lg shadow-lg p-4 text-center hover:scale-95 transition-transform duration-300"
          >
            {/* Image with Shape */}
            <div className="w-32 h-32 mx-auto mb-4 bg-cover bg-center rounded-full" style={{ backgroundImage: `url(${category.image})` }} />
            {/* Product Title */}
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{category.title}</h3>
            {/* Description */}
            <p className="text-gray-600 mb-4">{category.description}</p>
            {/* Button */}
            <a
              href="#"
              className="inline-block text-pink-500 font-semibold text-sm border-b-2 border-pink-500 hover:text-pink-700"
            >
              See Collection
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
