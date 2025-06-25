import React, { Suspense, useContext } from 'react';

import BookingList from './BookingList';
import { AuthContext } from '../context/AuthContext';
import { myBookingsPromise } from '../api/BookingAPI';



const MyBookings = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className='p-4'>
          <h2 className="text-2xl font-semibold mb-4">📋 My Bookings</h2>
            <Suspense fallback="loading your bookings">
                <BookingList myBookingsPromise={myBookingsPromise(user.email)}></BookingList>
            </Suspense>
        </div>
    );
};

export default MyBookings;