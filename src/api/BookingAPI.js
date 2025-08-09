 export const myBookingsPromise =email=>{
    return fetch(`https://ph-project-11-server.vercel.app/bookings?email=${email}`).then(res=>res.json())
}