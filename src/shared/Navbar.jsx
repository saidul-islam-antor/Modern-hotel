import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router'; // ✅ Corrected to 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, singOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSingOut = () => {
    singOut()
      .then(() => {
        console.log('Sign-out successful.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/rooms">Rooms</NavLink></li>
      {user && (
        <li><NavLink to="/myBookings">My Bookings</NavLink></li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Start Section */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {Links}
          </ul>
        </div>

        {/* Brand Name */}
        <NavLink to="/" className="text-xl lg:text-2xl font-bold text-gray-800 ml-2">
          Modern Hotel
        </NavLink>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {Links}
        </ul>
      </div>

      {/* End Section */}
      <div className="navbar-end space-x-3">
        {!user ? (
          <>
            <NavLink to="/login" className="btn btn-success btn-sm lg:btn-md">Login</NavLink>
            <NavLink to="/register" className="btn btn-success btn-sm lg:btn-md">Register</NavLink>
          </>
        ) : (
          <div className="relative">
            <img
              src={user.photoURL || "https://i.ibb.co/s2Qz8Q2/user.png"}
              alt="Profile"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white text-black rounded shadow-md z-10">
                <div className="p-4 border-b">
                  <p className="font-medium">Name: {user.displayName || "User"}</p>
                  <p className="text-sm text-gray-600">Email: {user.email}</p>
                </div>
                <button
                  onClick={handleSingOut}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
