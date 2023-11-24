import React from 'react';
import 'tailwindcss/tailwind.css';

const SaffronInfo = () => {
  return (
    <div className="container mx-auto mt-8 font-roboto max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Explore the Varieties of Kashmiri Saffron</h1>
        <p>
          Kashmiri saffron, known for its distinctive flavor, enticing aroma, and vivid color, comes in three primary types:
        </p>
        <ul className="list-disc ml-8">
          <li>Lachha Saffron (Mongra or Mogra Saffron): The highest quality, featuring only the dark red stigmas.</li>
          <li>Guchhi Saffron (Grade 1 Saffron): Encompasses both red stigmas and a small portion of the yellow style.</li>
          <li>Mongra Saffron (Lacha Saffron): Includes the entire red part of the saffron thread.</li>
        </ul>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">Unlock the Health Benefits of Kashmiri Saffron</h1>
        <ul className="list-disc ml-8">
          <li>Abundant in Antioxidants: Saffron boasts compounds like crocin, crocetin, and safranal, known for their antioxidant properties.</li>
          <li>Anti-Inflammatory Potency: Saffron's anti-inflammatory attributes may offer relief for specific conditions.</li>
          <li>Elevates Mood: Some studies suggest saffron's potential for enhancing mood.</li>
          <li>Aphrodisiac Qualities: Traditionally linked to boosting libido and addressing sexual disorders.</li>
          <li>Digestive Well-being: Saffron may contribute to digestive health and has been a remedy in traditional medicine for digestive issues.</li>
          <li>Culinary Excellence: Highly prized in the culinary realm for its distinct flavor and vibrant hue.</li>
        </ul>
        <p>
          It's crucial to emphasize that while saffron holds promise for health benefits, moderation is key. Always consult with a healthcare professional before incorporating saffron into your diet for medicinal purposes.
        </p>
      </div>
    </div>
  );
};

export default SaffronInfo;
