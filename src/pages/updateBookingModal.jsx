import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData, useNavigate } from 'react-router';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const UpdateBookingModal = () => {
  const booking = useLoaderData();
  const navigate = useNavigate();

  const [date, setDate] = useState(booking?.date ? new Date(booking.date) : new Date());

  const handleUpdate = () => {
    const updateDate = {
      date: date.toISOString().split('T')[0] // date string in yyyy-mm-dd format
    };

    fetch(`http://localhost:3000/bookings/${booking._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateDate),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data?.message) {
         

Swal.fire({
  title: "update successfully!",
  text: "You clicked the button!",
  icon: "success"
});
          navigate(-1); // modal close kore back page e jai
        } else {
          alert('Update failed.');
        }
      })
      .catch(error => {
        console.error('Error updating booking:', error);
        alert('Something went wrong!');
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Update Booking Date</h2>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          minDate={new Date()}
          className="w-full border px-3 py-2 rounded"
        />
        <div className="mt-4 flex justify-end gap-3">
          <button onClick={() => navigate(-1)} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookingModal;
