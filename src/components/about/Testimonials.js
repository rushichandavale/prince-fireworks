import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  // Handlers for Next and Previous buttons
  const handleNext = useCallback(() => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(handleNext, 5000); // Move every 5 seconds
    return () => clearInterval(timer); // Clean up on unmount
  }, [handleNext]); // Now safe, handleNext is stable

  // Animation Variants
  const variants = {
    enter: (direction) => ({
      x: direction === "next" ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction === "next" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="testimonial-section bg-[#fefaf5] py-24 relative text-center overflow-hidden min-h-[700px]">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Title */}
        <div className="flex flex-col items-center mb-52">
          <h2 className="text-5xl font-bold text-gray-800">Testimonials</h2>
        </div>

        {/* Testimonial Content with Animation */}
        <div className="relative flex flex-col justify-center items-center space-y-12">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute flex flex-col items-center px-6 text-center"
            >
              {/* Decorative Quote */}
              <div className="text-[#d46ad6] text-8xl font-bold leading-none mb-6">
                “
              </div>
              {/* Main Quote */}
              <p className="text-2xl italic text-gray-700 mb-20 leading-relaxed">
                {testimonials[currentIndex].quote}
              </p>
              {/* Author and Source */}
              <h4 className="font-bold text-lg text-gray-800 ">
                {testimonials[currentIndex].author}
              </h4>
              <p className="text-[#d46ad6] font-medium mt-2">
                {testimonials[currentIndex].source}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Large Navigation Buttons (Hidden on Mobile) */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 px-4 hidden md:block">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-[#d46ad6] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#a05ba6] transition-all duration-300"
          >
            &#8249;
          </button>
        </div>
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 px-4 hidden md:block">
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-[#d46ad6] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#a05ba6] transition-all duration-300"
          >
            &#8250;
          </button>
        </div>

        {/* Small Navigation Arrows (Visible on Mobile) */}
        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 px-4 md:hidden">
          <button
            onClick={handlePrev}
            className="w-8 h-8 bg-[#d46ad6] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#a05ba6] transition-all duration-300"
          >
            &#8249;
          </button>
        </div>
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 px-4 md:hidden">
          <button
            onClick={handleNext}
            className="w-8 h-8 bg-[#d46ad6] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#a05ba6] transition-all duration-300"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
