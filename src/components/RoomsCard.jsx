
import React from 'react';
import { useNavigate } from 'react-router';

const RoomsCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/rooms/${room._id}`)}
      className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-52 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{room.title}</h2>
        <p className="text-gray-600 mt-1">{room.description?.slice(0, 60)}...</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">${room.price}</span>
          <span className="text-sm text-gray-500">
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
