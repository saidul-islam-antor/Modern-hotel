import React from 'react';
import { useLoaderData,  } from 'react-router';
import BookingModal from '../components/BookingModal';

const BookingModalRoute = () => {
    const room=useLoaderData()
    // const navigate =useNavigate()
      return (
    <BookingModal
      room={room}
      // closeModal={() => navigate("/myBookings")}
      refetchRooms={() => {}}
    />
  );
};

export default BookingModalRoute;