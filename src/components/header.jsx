import React from "react";
import Logo from "../assets/Logo.svg"

function Header() {
  return (
    <div>
      <nav>
        <img src={Logo} alt="logo" />
        <p>Hello World!!!</p>
      </nav>
    </div>
  );
}

export default Header;


