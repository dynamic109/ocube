import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "../assets/css/hamburger.css";

const HamburgerMenu = ({ isOpen, toggle }) => {
  return (
    <div className="hamburger-container lg:hidden fixed top-4 left-4 z-[1100]">
      <button onClick={toggle} className="hamburger-btn bg-[#148E88] text-white p-2 rounded">
        {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
      </button>
    </div>
  );
};

export default HamburgerMenu;
