import React, { useEffect, useState } from 'react';
import {  useLoaderData, useNavigate } from 'react-router';
import BookingModal from '../components/BookingModal';
import axios from 'axios';

const RoomDetails = () => {
    const room =useLoaderData()
    const navigate =useNavigate()
    const [reviews, setReviews] = useState([]);

useEffect(() => {
  axios.get(`https://ph-project-11-server.vercel.app/reviews/${room._id}`)
    .then(res => setReviews(res.data))
    .catch(err => console.log("Review fetch error", err));
}, [room._id]);



    const [showModal, setShowModal] = useState(false);
    return (
       <div className="p-6 max-w-3xl mx-auto">
      <img src={room.image} alt={room.title} className="rounded-xl mb-4" />
      <h2 className="text-3xl font-bold mb-2">{room.title}</h2>
      <p className="text-gray-600 mb-2">{room.description}</p>
      <p className="text-lg font-semibold">Price: ${room.price}</p>
       {
        room.status!=="unavailable"?(
          <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
       
        onClick={() =>navigate(`/booking/${room?._id}`)}
      >
        Book Now
      </button>
        ):(
          <p className="text-red-500 font-semibold mt-4">
    This room is already booked.
  </p>
        )
      }

      <h3 className="text-xl font-bold mt-6">Reviews:</h3>
{reviews.length === 0 ? (
  <p className="text-gray-500 italic">No reviews yet for this room.</p>
) : (
  <ul className="space-y-4">
    {reviews.map((r, idx) => (
      <li key={idx} className="border p-4 rounded">
        <div className="flex justify-between">
          <p className="font-semibold">{r.username}</p>
          <p className="text-yellow-500">⭐ {r.rating}/5</p>
        </div>
        <p className="text-gray-700">{r.comment}</p>
        <p className="text-sm text-gray-400">{new Date(r.createdAt).toLocaleString()}</p>
      </li>
    ))}
  </ul>
)}
      
     

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