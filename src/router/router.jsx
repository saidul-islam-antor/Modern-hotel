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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
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
        }
    ]
  },
]);


export default router;