import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#d09cb9] text-white py-12">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Information */}
        <div className="col-span-2">
          <img
            src="/path-to-your-logo.png"
            alt="Prince Fireworks Logo"
            className="mb-4"
          />
          <p className="text-sm">
            Prince Fireworks Industries is a leading firecracker manufacturer.
            Founded in 1974, the company has emerged as a trusted name in
            Sivakasi, Tamil Nadu, under the guidance of visionary leadership.
          </p>
        </div>

        {/* Pages Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-gray-200">
                About Us
              </a>
            </li>
            <li>
              <a href="/safety-tips" className="hover:text-gray-200">
                Safety Tips
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-gray-200">
                Photo Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-200">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-gray-200">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Categories Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/traditional-crackers" className="hover:text-gray-200">
                Traditional Crackers
              </a>
            </li>
            <li>
              <a href="/elite-fireworks" className="hover:text-gray-200">
                Elite Fireworks
              </a>
            </li>
            <li>
              <a href="/fountains" className="hover:text-gray-200">
                Fountains
              </a>
            </li>
            <li>
              <a href="/aerial-novelties" className="hover:text-gray-200">
                Aerial Novelties
              </a>
            </li>
            <li>
              <a href="/gift-boxes" className="hover:text-gray-200">
                Gift Boxes
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Sivakasi, Tamil Nadu, India</li>
            <li>
              <a
                href="mailto:support@princefireworks.com"
                className="hover:text-gray-200"
              >
                support@princefireworks.com
              </a>
            </li>
            <li>+91 12345 67890</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#c584a7] py-4 mt-8">
        <div className="container mx-auto px-6 md:px-16 flex justify-between items-center text-sm">
          <p>© 2024 Prince Fireworks. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="facebook.com">
              <img
                src="/path-to-facebook-icon.png"
                alt="Facebook"
                className="h-6"
              />
            </a>
            <a href="instagram.com">
              <img
                src="/path-to-instagram-icon.png"
                alt="Instagram"
                className="h-6"
              />
            </a>
            <a href="youtube.com">
              <img
                src="/path-to-youtube-icon.png"
                alt="YouTube"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
