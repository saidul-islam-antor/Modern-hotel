import React, { useEffect } from 'react';
import { FaSearch, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';
import "aos/dist/aos.css";
import Aos from "aos"

const HowToBook = () => {
     useEffect(() => {
      Aos.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    }, []);
  const steps = [
    {
      icon: <FaSearch className="text-3xl text-blue-500 mb-4" />,
      title: "Browse & Choose",
      description: "Explore our rooms page and choose the perfect one based on your preference, rating, and price.",
    },
    {
      icon: <FaCalendarCheck className="text-3xl text-green-500 mb-4" />,
      title: "Select Booking Date",
      description: "Pick your preferred booking date using our easy calendar interface in the room details modal.",
    },
    {
      icon: <FaCheckCircle className="text-3xl text-purple-500 mb-4" />,
      title: "Confirm & Relax",
      description: "Click 'Confirm Booking' and you're all set! You can view or cancel bookings from 'My Bookings' page.",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">How to Book Rooms 🛎️</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <div data-aos="zoom-in-up" key={index} className="bg-white rounded-xl shadow hover:shadow-md p-6 transition-all">
            <div className="flex justify-center">{step.icon}</div>
            <h4 className="text-xl text-neutral font-semibold mb-2 mt-2">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToBook;
