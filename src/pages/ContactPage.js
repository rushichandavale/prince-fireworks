import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* Contact Us Section */}
      <section className="container mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in touch!</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full px-4 py-2 border rounded-md"
              />
              <textarea
                placeholder="Enquiry"
                rows={4}
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
              {/* Captcha Simulation */}
              <div className="flex items-center space-x-4">
                <input type="checkbox" id="captcha" />
                <label htmlFor="captcha" className="text-gray-700">
                  I am human
                </label>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Fireworks Image */}
          <div className="relative">
            <img
              src="/path-to-fireworks-image.jpg"
              alt="Fireworks"
              className="rounded-lg shadow-md"
            />
            <button className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full">
              Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-16">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Google Map */}
            <div>
              <iframe
                title="Prince Fireworks Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.6483622829525!2d77.80341137686672!3d9.454163782476551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03e2d40f03a2af%3A0xb74cdd975bf1612b!2sSivakasi!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="rounded-md"
              ></iframe>
            </div>
            {/* Contact Details */}
            <div>
              <p className="text-gray-800 text-lg">
                <strong>Prince Fireworks Corporate Office:</strong>
              </p>
              <p className="text-gray-700">41-A, PKSA Road, Sivakasi - 626189</p>
              <p className="text-gray-700">Tamil Nadu, India</p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 12345 67890
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@princefireworks.com"
                  className="text-teal-600 hover:underline"
                >
                  contact@princefireworks.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{" "}
                <a
                  href="https://princefireworks.com"
                  className="text-teal-600 hover:underline"
                >
                  www.princefireworks.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 md:px-16 py-12">
        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
        <ul className="space-y-4">
          {[
            "What do you mean by Green Crackers?",
            "Which is the fireworks capital of India?",
            "What is the specialty of Prince Fireworks?",
            "When was Prince Fireworks started?",
            "Which company makes the biggest fountain crackers in India?",
          ].map((question, index) => (
            <li key={index}>
              <details className="border border-gray-200 rounded-md">
                <summary className="p-4 cursor-pointer text-gray-800 font-medium">
                  {question}
                </summary>
                <p className="p-4 text-gray-600">
                  This is the answer to "{question}".
                </p>
              </details>
            </li>
          ))}
        </ul>
      </section>

      {/* YouTube Section */}
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-6 md:px-16">
          <h3 className="text-2xl font-bold mb-6">
            YouTube @princefireworks
          </h3>
          <p className="text-gray-700 mb-6">
            Kindly subscribe to our channel to get the latest info about Prince
            Fireworks Products.
          </p>
          <iframe
            title="Prince Fireworks YouTube Video"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
