import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./Testimonials.css"

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  // Handlers for Next and Previous buttons
  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#fefaf5] py-16 relative text-center overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8">Testimonials</h2>

        {/* Testimonial Content with Animation */}
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={currentIndex}
            timeout={300}
            classNames={direction === "next" ? "slide-next" : "slide-prev"}
          >
            <div className="relative flex flex-col items-center">
              <p className="text-2xl italic text-gray-700 mb-4">
                <span className="text-[#d46ad6] text-4xl font-bold">“</span>
                {testimonials[currentIndex].quote}
                <span className="text-[#d46ad6] text-4xl font-bold">”</span>
              </p>
              <h4 className="font-bold text-lg text-gray-800">
                {testimonials[currentIndex].author}
              </h4>
              <p className="text-[#d46ad6] font-medium">
                {testimonials[currentIndex].source}
              </p>
            </div>
          </CSSTransition>
        </SwitchTransition>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-[#d46ad6] text-white rounded-full flex items-center justify-center shadow-md"
          >
            &#8249;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-[#d46ad6] text-white rounded-full flex items-center justify-center shadow-md"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
