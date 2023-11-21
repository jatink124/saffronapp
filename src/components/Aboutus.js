// AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto mt-8 max-w-2xl">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <img
            src="https://www.kashmirbox.com/cdn/shop/products/1_52_2048x.jpg?v=1645435953"
            alt="About Us 1"
            className="w-1/3 rounded-md mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Journey</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit in purus imperdiet consectetur. Suspendisse potenti. Nullam scelerisque tellus a felis luctus, ac sagittis purus sodales.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <img
            src="https://www.kashmirbox.com/cdn/shop/products/1_52_2048x.jpg?v=1645435953"
            alt="About Us 2"
            className="w-1/3 rounded-md mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Values</h2>
            <p className="text-gray-700">
              Vestibulum ac tristique elit, vel rhoncus turpis. Aliquam et arcu ac libero viverra bibendum. Proin eu elit eu massa venenatis volutpat. In hac habitasse platea dictumst.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <img
            src="https://www.kashmirbox.com/cdn/shop/products/1_52_2048x.jpg?v=1645435953"
            alt="About Us 3"
            className="w-1/3 rounded-md mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              Nunc consectetur interdum arcu, vel feugiat velit cursus ut. Phasellus ac sodales urna. Vivamus fermentum augue a turpis congue, et mattis metus fringilla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
