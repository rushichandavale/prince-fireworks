import React from "react";
import crackerImg from '../../asset/home/crackers.webp'

const SafeToUse = ({
  title = "Safe to Use",
  description1 = "Our company specializes in manufacturing a wide range of firecrackers in India. We use high-end infrastructure in the manufacturing process. Quality & innovation have always been the basic necessity of our organization. The firecrackers we offer are safe & are made from superior quality raw materials. Our team comprises qualified pyrotechnics & quality control inspectors. As we are a reputed Fireworks manufacturer, our customers spread all over India.",
  buttonText = "See Our Products",
  description2 = "",
  image = crackerImg,  // Optional: Image URL for different pages
  imagePosition = "right",  // "left" or "right"
  backgroundColor = "#f7f0e5",  // Default background color
  buttonColor = "#01B1AB",  // Default button color
  headingColor = "text-gray-800"  // Default heading color
}) => {
  return (
    <div className={`relative py-16 px-6 md:px-16`} style={{ backgroundColor }}>
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className={`text-5xl font-extrabold ${headingColor} mb-16`}>
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-5xl mx-auto mb-16 text-lg leading-relaxed">
          {description1}
        </p>
        <p className="text-gray-600 max-w-5xl mx-auto mb-16 text-lg leading-relaxed">
          {description2}
        </p>
        

        {/* See Our Products Button */}
        <button className={`bg-[${buttonColor}] text-white py-2 px-8 rounded-full font-bold`}>
          {buttonText}
        </button>
      </div>

      {/* Cracker Image */}
      {image && (
        <div
          className={`absolute bottom-0 ${imagePosition === 'right' ? 'right-52' : 'left-52'} transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32`}
        >
          <img
            src={image}
            alt="Cracker"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
      )}
    </div>
  );
};

export default SafeToUse;
