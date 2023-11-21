// SaffronInfo.js

import React from 'react';
import 'tailwindcss/tailwind.css';

const SaffronInfo = () => {
  return (
    <div className="container mx-auto mt-8 font-roboto max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Types of Kashmiri Saffron</h1>

      <p className="mb-6">
        Kashmiri saffron is renowned for its unique flavor, aroma, and vibrant color. There are three main types:
      </p>

      <ul className="list-disc ml-8 mb-6">
        <li>Lachha Saffron (Mongra or Mogra Saffron): The highest quality with only the dark red stigmas.</li>
        <li>Guchhi Saffron (Grade 1 Saffron): Includes both red stigmas and a small part of the yellow style.</li>
        <li>Mongra Saffron (Lacha Saffron): Contains the entire red part of the saffron thread.</li>
      </ul>

      <h1 className="text-3xl font-bold mb-4">Benefits of Kashmiri Saffron</h1>

      <ul className="list-disc ml-8 mb-6">
        <li>Rich in Antioxidants: Saffron contains compounds like crocin, crocetin, and safranal with antioxidant properties.</li>
        <li>Anti-Inflammatory Properties: Saffron has anti-inflammatory properties that may be beneficial for certain conditions.</li>
        <li>Mood Enhancement: Some studies suggest saffron may have mood-enhancing properties.</li>
        <li>Aphrodisiac Properties: Traditionally associated with enhancing libido and treating sexual disorders.</li>
        <li>Digestive Health: Saffron may have digestive benefits and has been used in traditional medicine for digestive issues.</li>
        <li>Culinary Uses: Highly valued in the culinary world for its unique flavor and vibrant color.</li>
      </ul>

      <p className="mb-6">
        It's important to note that while saffron offers potential health benefits, moderation is key. Always consult with a healthcare professional before incorporating saffron into your diet for medicinal purposes.
      </p>
    </div>
  );
};

export default SaffronInfo;
