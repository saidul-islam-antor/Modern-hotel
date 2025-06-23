import React from 'react';

const WhyChooseUs = () => {
    
         return (
     <div className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Our Hotel?</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-lg hover:shadow-xl transition">
          <img src="https://i.ibb.co/2YtT0qm4/b-logo-design-vector-image-1041649-2996.jpg" alt="Luxury" className="w-16 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Luxury & Comfort</h4>
          <p className="text-gray-600 text-sm">Premium rooms, plush bedding, and breathtaking views designed to give you unmatched comfort.</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-xl transition">
          <img src="https://i.ibb.co/DHj8C4CH/24-hour-everyday-open-service-background-help-support-1017-49576.jpg" alt="Service" className="w-16 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">24/7 Service</h4>
          <p className="text-gray-600 text-sm">Friendly staff always ready to assist you, ensuring a smooth and relaxing experience throughout your stay.</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-xl transition">
          <img src="https://i.ibb.co/9mhpZx2K/building-safety-abstract-concept-illustration-construction-site-building-equipment-personal-safety-c.jpg" alt="Secure" className="w-16 mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Secure & Safe</h4>
          <p className="text-gray-600 text-sm">Top-class security system and privacy policies so you can enjoy your time worry-free.</p>
        </div>
      </div>
    </div>
  );
};
   


export default WhyChooseUs;