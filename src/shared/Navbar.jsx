import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router"; // নিশ্চিত react-router-dom
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "./ThemProvider";

const Navbar = () => {
  const { user, singOut } = useContext(AuthContext);
  const { toggleTheme } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSingOut = () => {
    singOut()
      .then(() => console.log("Sign-out successful."))
      .catch((error) => console.log(error));
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
      : "text-gray-800 hover:text-indigo-600";

  const Links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/rooms" className={navLinkClass}>
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className={navLinkClass}>
          FAQ
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myBookings" className={navLinkClass}>
            My Bookings
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-primary lg:px-20 shadow-sm px-4">
      <div className="flex justify-between items-center h-16">
        {/* Left: Mobile toggle + Brand */}
        <div className="flex items-center space-x-4">
          {/* Mobile Dropdown Toggle */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>

          {/* Brand */}
          <NavLink
            to="/"
            className="text-xl font-bold text-gray-800 ml-2 select-none"
          >
            Modern Hotel
          </NavLink>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">{Links}</ul>
        </div>

        {/* Right: Theme toggle + User Auth */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost p-2"
            aria-label="Toggle Theme"
          >
            {/* Icon or SVG for theme */}
            🌙
          </button>

          {/* Auth Buttons / User Profile */}
          {!user ? (
            <>
              <NavLink to="/login" className="btn btn-success btn-sm lg:btn-md">
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-success btn-sm lg:btn-md"
              >
                Register
              </NavLink>
            </>
          ) : (
            <div className="relative">
              <img
                src={user.photoURL || "https://i.ibb.co/s2Qz8Q2/user.png"}
                alt="Profile"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white text-black rounded shadow-md z-10">
                  <div className="p-4 border-b">
                    <p className="font-medium">
                      Name: {user.displayName || "User"}
                    </p>
                    <p className="text-sm text-gray-600">Email: {user.email}</p>
                  </div>
                  <button
                    onClick={handleSingOut}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
