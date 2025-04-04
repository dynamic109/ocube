import React from "react";
import { TbLetterX } from "react-icons/tb";
import Logo from "../assets/Logo.svg"


export default function MobileNav({ isOpen, setIsOpen }) {
  return (
    <nav className={`${isOpen === true ? "flex flex-col translate-x-0 opacity-100" : "hidden -translate-x-full opacity-0"} px-3 py-6  transform transition-transform duration-300 ease-in-out `}>
      <div className="flex justify-between items-center mb-6">
        <img src={Logo} alt="logo" />

        <div onClick={() => setIsOpen(false)} >
          <TbLetterX />
        </div>
      </div>
      <ul className="lg:hidden space-x-7 list-none flex flex-col mb-3 ">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#">Courses</a>{" "}
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          {" "}
          <a href="#">About Us</a>
        </li>
        <a href="#">Contact Us</a>
      </ul>

      <div className="lg:hidden  flex flex-col gap-3">
        <button className="border border-teal-700 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-50">
          Log In
        </button>

        <button className="bg-teal-700 text-white px-4 py-2 rounded-lg">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
