import React from "react";
import Logo from "../assets/Logo.svg"

function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between px-10">
        <img src={Logo} alt="logo" />
       <div className="flex space-x-7">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Resources</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        </div>

      <div className="flex space-x-4">
      <button className="border border-teal-700 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-50">
        Log In
      </button>
 
      <button className="bg-teal-700 text-white px-4 py-2 rounded-lg">
        Sign Up
      </button>

      </div>



      </nav>
    </div>
  );
}

export default Header;


