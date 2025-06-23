import React, { useEffect, useState } from 'react';

import RoomsCard from '../components/RoomsCard';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/rooms')
      .then(res => res.json())
      .then(data => {
        setRooms(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🏨 Available Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rooms.map(room => (
          <RoomsCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
