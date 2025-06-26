import React from 'react';


import { NavLink } from 'react-router';

const Errorpage = () => {
    return (
        <div>
          
          <div className='text-center p-70'>
          <h1 className='text-6xl text-center mb-6'>Error 404</h1>
          <div className='text-center text-4xl text-green-500'>
          <button className='btn btn-neutral'>
      <NavLink className={({ isActive }) => isActive ? "text-indigo-500 " : ""}
       to="/"> Back Home</NavLink>
        </button>
          </div>
          </div>
         
          
          
           
        </div>
    );
};

export default Errorpage;