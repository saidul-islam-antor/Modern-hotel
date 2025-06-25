import React, { use } from 'react';
import BookingRow from './BookingRow';


const BookingList = ({myBookingsPromise}) => {
    const bookings =use(myBookingsPromise)
    
      
    return (
       
          <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            
          </label>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>price</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        bookings.map((booking,index)=>
            <BookingRow 
         key={booking._id}
          booking={booking}
         
          bookings={bookings}
        //   setBookings={setBookings}
          index={index}
          ></BookingRow>
        )
     }
    
      
    </tbody>
   
    
  </table>
</div>
          </div>

 
    );
};

export default BookingList;