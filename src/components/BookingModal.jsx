import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext"; // 🧠 Your Auth Context
import axios from "axios";





const BookingModal = ({ room, closeModal, refetchRooms }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { user } = useContext(AuthContext);
  


  const handleBooking = async () => {
    

    if (!selectedDate) {
      toast.error("Please select a booking date");
      return;
    }

    const bookingData = {
      roomId: room._id,
      userEmail: user?.email,
      date: selectedDate.toISOString().split('T')[0]  
,
      price: room.price,
      image: room.image,
      roomTitle: room.title,
      description:room.description,
      
    };


    try {
      const res = await axios.post('http://localhost:3000/booking',bookingData)
      

      if (res.data.bookingId) {
        toast.success("Booking Confirmed!");
        closeModal();
        refetchRooms(); // Refresh room availability
      } else {
        toast.error(res.data.message || "Booking Failed");
      }
    } catch (error) {
      toast.error("Booking failed. Try again.",error);
    }
   };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-2 text-center">{room.title}</h2>
        <img src={room.image} alt={room.title} className="rounded-lg h-40 w-full object-cover mb-4" />
        <p className="text-gray-600 mb-2">{room.description}</p>
        <p className="mb-4 font-semibold">Price: ${room.price}</p>

        <label className="font-semibold block mb-2">Select Booking Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="w-full border px-3 py-2 rounded"
          minDate={new Date()}
          placeholderText="Click to select date"
        />

        <div className="flex justify-between mt-6">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            onClick={closeModal}
          >
            Cancel
          </button>

          
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleBooking}
          >
            Confirm Booking
          </button>
        
          
        
        </div>
    
      </div>
    </div>
    
  );
};

export default BookingModal;
