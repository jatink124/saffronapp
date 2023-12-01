import React from 'react';

const BannerImage = ({ imageUrl, altText, linkUrl }) => {
  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-auto rounded-lg shadow-md sm:w-full sm:h-full"
      />
      <a href={linkUrl} className="absolute top-0 left-0 w-full h-full rounded-lg bg-transparent hover:bg-opacity-20 transition duration-300 ease-in-out">
        {/* Add screen readers accessibility if needed */}
        <span className="sr-only">Click here to visit the card page</span>
      </a>
      {/* Add any overlay or content over the image if needed */}
      {/* Example: <div className="absolute top-0 left-0 right-0 bottom-0 text-white">Your Content</div> */}
    </div>
  );
};

export default BannerImage;
