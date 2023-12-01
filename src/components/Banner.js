import React from 'react';

const Banner = () => {
  return (
    <div className="bg-yellow-500 p-4 text-center">
      <p className="text-xl font-bold text-gray-800">
        Limited Time Offer! Get 20% Off on All Products.
      </p>
      <p className="text-sm text-gray-700 mt-2">
        Use code: <span className="font-bold">SAVE20</span> at checkout.
      </p>
    </div>
  );
};

export default Banner;
