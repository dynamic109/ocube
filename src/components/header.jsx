import React from "react";
import Logo from "../assets/Logo.svg"
import { RxHamburgerMenu } from "react-icons/rx";
// import { useState } from "react";
import MobileNav from "./mobile-nav";


function Header({ isOpen, setIsOpen }) {
   console.log(isOpen);

  return (
    <div>
      <nav className={`${isOpen === true ?  "hidden" : "flex items-center justify-between"}   px-10 py-6`}>
        <img src={Logo} alt="logo" />
       <div className="flex space-x-7">
        <ul>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="/Resources">Resources</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        
        </ul>
        </div>
      <div className="flex space-x-4">
    <a href="/Dashlogin" > {" "} <button className="border border-teal-700 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-50">
        Log In
      </button></a>
 
      <a href="/Signin"> <button className="bg-teal-700 text-white px-4 py-2 rounded-lg">
        Sign Up
      </button></a>

      </div>
     <div className="block lg:hidden" onClick={() => setIsOpen(true)}>
     <RxHamburgerMenu />

     </div>


      </nav>

      <MobileNav  isOpen={isOpen}  setIsOpen={setIsOpen}/>
    </div>
  );
}

export default Header;


