import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
    
        {/* Brand Section */}
        <div>
          
          <h2 className="text-2xl font-bold text-white mb-3">Modern Hotel</h2>
          <p className="text-sm">
            Experience luxury and comfort in the heart of the city.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/rooms" className="hover:text-white transition">Rooms</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p>123 Main Street, Dhaka, Bangladesh</p>
          <p>Phone: +8801932618555</p>
          <p>Email: hoquesaidul955@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/mdsaidulislamantor24" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/saidul-islam-1128a7286/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/saidul-islam-antor" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Modern Hotel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
