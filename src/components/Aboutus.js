import React from 'react';

const AboutUs = () => {
  const sections = [
    {
      title: 'About Us',
      description:
        'Embrace the finest saffron experience with [Your Business Name], your ultimate destination for premium saffron. Our journey began with a passion for quality and authenticity, leading us to source and deliver the world\'s best saffron directly from the fields to your doorstep. Our team of saffron enthusiasts, connoisseurs, and experts shares a common goal – to provide you with an authentic saffron experience that goes beyond your expectations. We believe in transparency, integrity, and the power of saffron to elevate your everyday moments.',
      image: 'images/1.jpg', // Replace with the actual image source
      alt: 'About Us',
    },
    {
      title: 'Vision',
      description:
        'Our vision is to become the global leader in premium saffron, recognized for its purity, potency, and the unparalleled joy it brings to people\'s lives. We envision:',
      bulletPoints: [
        'Global Accessibility: Making the world\'s best saffron accessible to customers worldwide.',
        'Sustainable Practices: Promoting sustainable and ethical saffron cultivation practices.',
        'Innovation and Research: Exploring new applications and benefits of saffron.',
        'Community Engagement: Fostering a community of saffron lovers to connect, learn, and explore.',
      ],
      image: 'images/2.jpg', // Replace with the actual image source
      alt: 'Vision',
    },
    {
      title: 'Mission',
      description:
        'At [Your Business Name], we are the go-to destination for saffron enthusiasts, chefs, and anyone who appreciates the finest quality spices. Our mission is to:',
      bulletPoints: [
        'Quality Assurance: Consistently deliver saffron that exceeds expectations.',
        'Customer Satisfaction: Create a seamless shopping experience with detailed product information, secure transactions, and prompt customer support.',
        'Culinary Inspiration: Share recipes, tips, and ideas that showcase the versatility of saffron in various cuisines.',
        'Cultural Appreciation: Educate and celebrate the cultural heritage of saffron, fostering an appreciation for its craftsmanship.',
      ],
      image: 'images/3.jpg', // Replace with the actual image source
      alt: 'Mission',
    },
  ];
  const saffronStyle = {
    color: 'saffron', // You can replace 'saffron' with your desired saffron color code
    fontWeight: 'bold',
  };

  return (
    <div className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
      {sections.map((section) => (
        <div className="flex flex-col sm:flex-row items-center my-8" key={section.title}>
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
            <img
              src={section.image}
              alt={section.alt}
              className="w-full h-auto mb-4 sm:mb-0"
            />
            <h2 className="text-3xl font-bold mb-4" style={saffronStyle}>
              {section.title}
            </h2>
            {section.bulletPoints ? (
              <>
                <h3 className="text-xl font-semibold mb-2" style={saffronStyle}>
                  Key Points:
                </h3>
                <ul>
                  {section.bulletPoints.map((point, index) => (
                    <li className="text-lg" key={index} style={saffronStyle}>
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-lg sm:text-base" style={saffronStyle}>
                {section.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;