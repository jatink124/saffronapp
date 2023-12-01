// Navbar.js

import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-saffron p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl"><a href="/">Kashmiri Saffron Info</a></div>
        <div className="flex space-x-4">
          <a href="/" className="text-white font-bold border-b-2 border-white">Home</a>
          <a href="/aboutus" className="text-white font-bold border-b-2 border-white">About Us</a>
          <a href="/contactus" className="text-white font-bold border-b-2 border-white">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
