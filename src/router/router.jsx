import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Home/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Rooms from '../pages/Rooms';
import RoomDetails from '../pages/RoomDetails';
import PrivetRoutes from '../routes/PrivetRoutes';

import BookingModalRoute from '../pages/BookingModalRoute';
import MyBookings from '../mybookings/MyBookings';

import UpdateBookingModal from '../pages/updateBookingModal';
import Errorpage from '../pages/ErrorPage';
import AboutUs from '../pages/AboutUs';
import FAQSection from '../pages/Faq';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/register',
            element:<Register></Register>

        },
        {
            path:'/login',
            element:<Login></Login>

        },
        {
          path:'/rooms',
          element:<Rooms></Rooms>
        },
        {
          path:'/about',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/faq',
          element:
            <FAQSection></FAQSection>
         
        },
        {
          path:'/rooms/:id',
          loader:({params})=>fetch(`https://ph-project-11-server.vercel.app/rooms/${params.id}`),
          element:
            <RoomDetails></RoomDetails>
          
        },
        {
          path:'/booking/:id',
          loader:({params})=>fetch(`https://ph-project-11-server.vercel.app/rooms/${params.id}`),
          element:<PrivetRoutes>
            <BookingModalRoute></BookingModalRoute>
          </PrivetRoutes>
        },
        {
          path:'/myBookings',
          element:<PrivetRoutes>
            <MyBookings></MyBookings>
          </PrivetRoutes>
        },
        {
          path:'bookings/:id',
          loader:({params})=> fetch(`https://ph-project-11-server.vercel.app/bookings/${params.id}`),
          element:<UpdateBookingModal></UpdateBookingModal>
        }

    ]
  },
]);


export default router;