import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import BookingModal from '../components/BookingModal';

const BookingModalRoute = () => {
    const room=useLoaderData()
    const navigate =useNavigate()
      return (
    <BookingModal
      room={room}
      closeModal={() => navigate(-1)}
      refetchRooms={() => {}}
    />
  );
};

export default BookingModalRoute;