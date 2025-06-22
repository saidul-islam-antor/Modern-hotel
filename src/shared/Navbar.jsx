import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {user,singOut}=useContext(AuthContext)
     const Links=<>
         <li><NavLink to={"/"}>Home</NavLink></li>
       
         <li><NavLink to={"home2"}>Home</NavLink></li>    
    </>
      const [dropdownOpen, setDropdownOpen] = useState(false);
       const handleSingOut =()=>{
        singOut()
        .then(() => {
   console.log('Sign-out successful.')
}).catch((error) => {
  // An error happened.
  console.log(error)
});

}
    
    return (
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Links}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    
       {!user && (
          <>
            <NavLink to='/login' className="btn btn-success">Login</NavLink>
            <NavLink to='/register' className="btn btn-success">Register</NavLink>
          </>
        )} 

         {user && (
          <div className="relative">


            <img
              src={user.photoURL || ""}
              alt="Profile"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
            />

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white text-black rounded shadow-md z-10">
                <div className="p-2 border-b">
                 <p className='tooltip tooltip-bottom'>Name: {user.displayName || "user"}</p>
                  <p className="font-semibold">Email</p>
                  <p className='text-xl'>{user.email}</p>

                </div>
                <button onClick={handleSingOut}  className="w-full text-left px-4 py-2 btn">Log Out</button>
              </div>
            )}
          </div>
        )}
        
       
    
  </div>
</div>
    );
};

export default Navbar;