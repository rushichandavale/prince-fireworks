import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data inside the component
  const faqs = [
    { question: "What do you mean by Green Crackers?", answer: "Green Crackers are environmentally friendly crackers with reduced emissions." },
    { question: "Which is the fireworks capital of India?", answer: "Sivakasi is considered the fireworks capital of India." },
    { question: "What is the speciality of Ajanta Fireworks?", answer: "Ajanta Fireworks is known for its innovative and high-quality fireworks." },
    { question: "When was Ajanta Fireworks started?", answer: "Ajanta Fireworks was established in 1974." },
    { question: "Which company makes the biggest fountain crackers in India?", answer: "Ajanta Fireworks manufactures the largest fountain crackers in India." },
    { question: "How can we buy Ajanta Fireworks crackers?", answer: "Ajanta Fireworks products are available through authorized dealers and online platforms." },
    { question: "Which company has the largest variety of children Fireworks In India?", answer: "Ajanta Fireworks offers the largest variety of children's fireworks." },
    { question: "How many new products, Ajanta Fireworks are launching this Diwali?", answer: "Ajanta Fireworks is launching 25 new products this Diwali." },
    { question: "What is the vision of Ajanta Fireworks?", answer: "To light up celebrations while maintaining safety and environmental responsibility." },
    { question: "Are Ajanta Fireworks Products available, throughout the year?", answer: "Yes, they are available year-round through dealers." },
    { question: "How to Contact Ajanta Fireworks for inquiries?", answer: "You can contact Ajanta Fireworks via their website or customer support number." },
    { question: "Where to find the functions of Ajanta Fireworks crackers online?", answer: "Functions and details are available on their official website." },
    { question: "Under which law does Fireworks Industry belong to?", answer: "The Fireworks industry in India is regulated under the Explosives Act, 1884." },
    { question: "When was the first fireworks factory stated in Sivakasi?", answer: "The first factory in Sivakasi was started in 1940." },
  ];

  // Toggle function to handle the opening and closing of answers
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 bg-white cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <span
                className={`text-xl transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="mt-4 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
