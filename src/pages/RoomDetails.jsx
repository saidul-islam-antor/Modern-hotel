import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import BookingModal from '../components/BookingModal';

const RoomDetails = () => {
    const room =useLoaderData()
    console.log(room)
    const [showModal, setShowModal] = useState(false);
    return (
       <div className="p-6 max-w-3xl mx-auto">
      <img src={room.image} alt={room.title} className="rounded-xl mb-4" />
      <h2 className="text-3xl font-bold mb-2">{room.title}</h2>
      <p className="text-gray-600 mb-2">{room.description}</p>
      <p className="text-lg font-semibold">Price: ${room.price}</p>
      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowModal(true)}
      >
        Book Now
      </button>

      {showModal && (
        <BookingModal
          room={room}
          closeModal={() => setShowModal(false)}
          refetchRooms={() => {}} // You can update this later
        />
      )}
    </div>
    );
};

export default RoomDetails;