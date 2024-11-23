import React from "react";

const WhyChooseUs = ({ image }) => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="container mx-auto">
      {/* Full-width Box */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto h-[750px] shadow-xl rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={image}
            alt="Why Choose Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div
          className="flex-1 flex flex-col p-10 pt-28 text-white"
          style={{ backgroundColor: "#ad59a2" }}
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
            Why Choose Us?
          </h2>

          {/* Points List */}
          <ol className="space-y-6 text-lg md:text-xl">
            {[
              "Innovative Range of Crackers",
              "Supreme Quality at an Affordable Price",
              "Best Indian Brand in Fountains and Children's Fancy",
              "Dedicated Customer Care Service",
            ].map((point, index) => (
              <li key={index} className="flex items-center space-x-4">
                {/* Number Circle */}
                <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-gray-800 bg-white rounded-full shadow-md">
                  {index + 1}
                </div>
                {/* Point Text */}
                <span className="font-semibold">{point}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
