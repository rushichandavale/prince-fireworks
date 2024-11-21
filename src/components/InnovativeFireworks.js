import React, { useState } from "react";
import innovativeImg from '../assets/images/rockets-flying-fireworks.webp'

const InnovativeFireworks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Fireworks data
  const fireworksCategories = [
    { title: "Traditional Crackers", description: "Classic crackers with vibrant colors and sounds." },
    { title: "Elite Fireworks", description: "Premium fireworks for special occasions and celebrations." },
    { title: "Fountain Crackers", description: "Spectacular fountains with dazzling effects." },
    { title: "Aerial Novelties", description: "High-flying fireworks with stunning patterns." },
    { title: "Gift Boxes", description: "Curated gift sets for festive seasons." },
  ];

  // Toggle function for list items
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Image */}
        <div className="relative flex-1 mb-8 md:mb-0 md:mr-8">
          <img
            src={innovativeImg} // Replace with the actual image path
            alt="Innovative Fireworks"
            className="rounded-xl shadow-lg"
          />
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-200 rounded-full z-[-1]"></div>
          <div className="absolute bottom-0 right-4 w-10 h-10 bg-pink-500 rounded-full z-[-1]"></div>
        </div>

        {/* Right Section: Content */}
        <div className="flex-1">
          {/* Label */}
          <span className="inline-block bg-pink-100 text-pink-600 font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-4 text-sm">
            What We Offer
          </span>

          {/* Title */}
          <h2 className="text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
            Innovative & <br /> Diverse Fireworks
          </h2>

          {/* Fireworks List */}
          <ul className="max-w-lg mx-auto mt-8 space-y-4">
            {fireworksCategories.map((item, index) => (
              <li
                key={index}
                className={`border border-gray-300 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${
                  openIndex === index ? "bg-white" : "bg-white"
                }`}
                onClick={() => toggleOpen(index)}
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                  <span
                    className={`text-2xl font-bold ${
                      openIndex === index ? "text-pink-500 rotate-45" : "text-gray-500"
                    } transition-transform duration-300`}
                  >
                    +
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-700 leading-relaxed">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InnovativeFireworks;
