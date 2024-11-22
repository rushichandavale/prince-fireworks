import React, { useState } from "react";
import bombImg from '../assets/images/double_bomb.webp'

const BusinessEnquiry = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // Add form submission logic here
    alert("Thank you for your enquiry! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-16">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
          Business Enquiry
        </h2>

        {/* Form */}
        <form
          className="max-w-lg mx-auto  p-6 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Bomb Image */}
      <div className="absolute bottom-0 right-52 transform -translate-x-1/2 w-32 h-32">
        <img
          src={bombImg} // Replace with your bomb image URL
          alt="Bomb"
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
    </div>
  );
};

export default BusinessEnquiry;
