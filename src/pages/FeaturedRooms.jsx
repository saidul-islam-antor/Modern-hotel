// FeaturedRooms.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const FeaturedRooms = () => {
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const navigate = useNavigate();
  console.log(featuredRooms)
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:3000/room/top-rated?limit=6");
        setFeaturedRooms(res.data);
      } catch (error) {
        console.error("Error fetching featured rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <section className="py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredRooms.map((room) => (
          <div key={room._id} className="bg-white rounded-xl shadow p-4">
            <img
              src={room.image}
              alt={room.title}
              className="rounded-lg h-40 w-full object-cover mb-3"
            />
           <div className="flex justify-center space-x-10">
             <h3 className="text-xl font-semibold">{room.title}</h3>
            <h3 className="text-xl font-semibold text-yellow-500"> ⭐{room.averageRating}/5</h3>
             
           </div>
            <p className="text-gray-600 mb-2">
              {room.description?.slice(0, 100)}...
            </p>
            <p className="text-lg font-bold mb-2">${room.price}</p>
            <button
              onClick={() => navigate(`/rooms/${room.roomId}`)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRooms;
