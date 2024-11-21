import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data
  const faqs = [
    { question: "What do you mean by Green Crackers?", answer: "Green Crackers are environmentally friendly crackers with reduced emissions." },
    { question: "Which is the fireworks capital of India?", answer: "Sivakasi is considered the fireworks capital of India." },
    { question: "What is the speciality of Ajanta Fireworks?", answer: "Ajanta Fireworks is known for its innovative and high-quality fireworks." },
    { question: "When was Ajanta Fireworks started?", answer: "Ajanta Fireworks was established in 1974." },
    { question: "Which company makes the biggest fountain crackers in India?", answer: "Ajanta Fireworks manufactures the largest fountain crackers in India." },
    { question: "How can we buy Ajanta Fireworks crackers?", answer: "Ajanta Fireworks products are available through authorized dealers and online platforms." },
    { question: "How can we buy Ajanta Fireworks crackers?", answer: "Ajanta Fireworks products are available through authorized dealers and online platforms." }, { question: "How can we buy Ajanta Fireworks crackers?", answer: "Ajanta Fireworks products are available through authorized dealers and online platforms." }, { question: "How can we buy Ajanta Fireworks crackers?", answer: "Ajanta Fireworks products are available through authorized dealers and online platforms." }, { question: "How can we buy Ajanta Fireworks crackers?", answer: "Ajanta Fireworks products are available through authorized dealers and online platforms." }, { question: "How can we buy Ajanta Fireworks crackers?", answer: "Ajanta Fireworks products are available through authorized dealers and online platforms." }, { question: "How can we buy Ajanta Fireworks crackers?", answer: "Ajanta Fireworks products are available through authorized dealers and online platforms." },
  ];

  // Toggle function
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Button-like Title */}
      <div className="flex justify-center mb-8">
        <button className="bg-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-pink-600 focus:outline-none">
          Most Common Questions
        </button>
      </div>

      <h2 className="text-5xl font-bold mb-8 text-center text-gray-800">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md p-4 bg-white cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
              <span
                className={`text-2xl transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
                style={{ color: "#ec4899" }} // Pink color for the + icon
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer with Smooth Animation */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-screen mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
