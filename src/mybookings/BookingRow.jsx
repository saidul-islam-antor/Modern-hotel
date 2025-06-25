
import Swal from 'sweetalert2';




const BookingRow = ({booking,bookings,setBookings,  index}) => {
 
   
    const handleCancel =(id)=>{
         console.log ( 'after delete',id)
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

 fetch(`http://localhost:3000/bookings/${id}`,{
    method:'DELETE'
 })
 .then(res=>res.json())
 .then(data=>{
    if(data.deletedCount){

        const remainingUser=bookings.filter(u=>u._id!==id)
        setBookings(remainingUser)
         Swal.fire({
      title: "Deleted!",
      text: "Your booking has been deleted.",
      icon: "success"
    });
    }
 })


   
  }
});

    }
   
    return (
       <tr>
        <th>
          <label>
            {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className=" h-24 w-24">
                <img
                  src={booking.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
        
      {booking.userEmail}
        </td>
        <td>{booking.price}</td>
    
         <td className="space-x-2  space-y-2">
                 <button onClick={() => handleCancel(booking._id)} className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
                  <button onClick={() => handleUpdateDate(booking)} className="bg-blue-500 text-white px-2 py-1 rounded">Update Date</button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">Review</button>
                </td>
        
      </tr>
    );
};

export default BookingRow;