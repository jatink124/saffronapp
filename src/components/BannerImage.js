// BannerImage.js

import React from 'react';
const linkStyle = {
  position: 'absolute',
  top: '53%', // Adjust the positioning based on your specific needs
  left: '74%', // Adjust the positioning based on your specific needs
  transform: 'translate(-50%, -50%)',
  width: '259px', // Adjust the size of the transparent link
  height: '50px', // Adjust the size of the transparent link
  cursor: 'pointer',
  backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background color
  border: 'none',
  outline: 'none',
};
const BannerImage = ({ imageUrl, altText }) => {
  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-auto"
      />
       <a href="/card" style={linkStyle}    className="hover:bg-opacity-20 transition duration-300 ease-in-out sm:w-1/2 sm:h-12">
        {/* You can add content inside the link if needed */}
      </a>
      {/* Add any overlay or content over the image if needed */}
      {/* Example: <div className="absolute top-0 left-0 right-0 bottom-0 text-white">Your Content</div> */}
    </div>
  );
};

export default BannerImage;
