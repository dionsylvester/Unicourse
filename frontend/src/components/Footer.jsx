import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
            <h3 className="text-2xl font-bold mb-4">Unicourse</h3>
            <p className="text-gray-400">
              Explore a variety of courses and enhance your skills with us. Join
              our community of learners today.
            </p>
          </div>

          {/* Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              1234 Unicourse Lane, Education City, ABC 12345
            </p>
            <p className="text-gray-400">Email: info@unicourse.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
          </div>

          {/* Social Media */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2024 Unicourse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
