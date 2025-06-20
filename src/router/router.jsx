import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Home/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

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
        
    ]
  },
]);


export default router;