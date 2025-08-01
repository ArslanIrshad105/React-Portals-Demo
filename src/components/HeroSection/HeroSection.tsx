import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Explore React Portals
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover how React portals enable rendering components outside their parent DOM hierarchy, 
        perfect for modals, tooltips, and notifications.
      </p>
    </div>
  );
};

export default HeroSection;