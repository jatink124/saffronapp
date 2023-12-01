import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-saffron text-white py-4 text-center w-full">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
