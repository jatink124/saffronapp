// ContactUs.js

import React from 'react';

const Contactus = () => {
  return (
    <div className="container mx-auto mt-8 max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

      <form className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
      </form>

      <p className="text-gray-700">
        Feel free to reach out to us with any questions or concerns. We'll get back to you as soon as possible.
      </p>
    </div>
  );
};

export default Contactus;
