import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-3xl mx-auto pt-20 pb-10 px-4">
      <div className="bg-base-100 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-primary mb-6 text-center tracking-wide">About Modern Hotel</h1>
        <p className="text-lg text-base-content mb-8 text-center">
          Welcome to Modern Hotel! Experience the perfect blend of comfort, elegance, and hospitality. Our mission is to make every guest feel special and every stay unforgettable.
        </p>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-3">Our Journey</h2>
            <p className="text-base-content">
              Since opening our doors in 2020, Modern Hotel has been a sanctuary for travelers from all walks of life. We believe in creating a warm, welcoming environment where guests can relax and recharge. Our dedicated team works tirelessly to ensure your experience is nothing short of exceptional.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-3">Our Values</h2>
            <ul className="list-disc list-inside text-base-content  pl-4">
              <li>Guest-first service</li>
              <li>Cleanliness and safety</li>
              <li>Continuous improvement</li>
              <li>Community engagement</li>
              <li>Eco-friendly practices</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-secondary mb-3">Meet Our Team</h2>
            <p className="text-base-content">
              Our staff is the heart of Modern Hotel. From the front desk to housekeeping, every member is committed to making your stay memorable. We value diversity, professionalism, and genuine care for our guests.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;