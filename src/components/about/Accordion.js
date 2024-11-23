import React, { useState, useRef } from "react";

const Accordion = ({ steps }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        {/* Heading Section */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-800">
          Fireworks Manufacturing Process
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-600 text-base sm:text-lg leading-relaxed mb-12">
          Demonstrated by living our core values: compassion, growth, courage
          to act, responsibility, belonging, curiosity. You can see them
          cultivated in every experience for students, families, and staff.
        </p>
        <p className="max-w-4xl mx-auto text-center text-gray-600 text-base sm:text-lg leading-relaxed mb-12">
          Community is everything. It’s who we are and how things get done.
          Everyone here is motivated by a deep commitment to making sure each
          child and family feels welcome and included. When everyone feels like
          they belong, we are stronger and smarter together.
        </p>

        {/* Accordion Items */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`border border-gray-300 rounded-lg shadow-md mx-auto transition-transform duration-300 ${
                openIndex === index ? "bg-pink-50" : "bg-white"
              }`}
              style={{ maxWidth: "1100px" }} // Adjust box width
            >
              {/* Title and Toggle Button */}
              <div
                className="flex justify-between items-center cursor-pointer p-4"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center w-full">
                  {step.title}
                </h3>
                <span
                  className={`text-2xl font-bold transition-transform duration-300 ${
                    openIndex === index
                      ? "text-pink-500 rotate-45"
                      : "text-gray-500 rotate-0"
                  }`}
                >
                  +
                </span>
              </div>

              {/* Smooth Content Expansion */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight:
                    openIndex === index
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0",
                }}
              >
                <div className="p-4 flex flex-col items-center text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed space-y-4">
                  {/* Content */}
                  <p className="text-center">{step.content}</p>
                  {/* Image */}
                  {step.image && (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-lg shadow-lg w-40 sm:w-56 mt-4"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
