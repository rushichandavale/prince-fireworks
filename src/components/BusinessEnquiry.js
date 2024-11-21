import React, { useState } from "react";

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
  };

  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Business Enquiry</h2>
        <form
          className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessEnquiry;
