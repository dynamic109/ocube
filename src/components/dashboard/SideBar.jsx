import React from "react";
import Logo from "/Logo.png";
const SideBar = () =>{
return(<>
    <div className="h-screen">
      <div className="h-full flex flex-col bg-white border-r shadow-sm">
      <div className="flex items-center justify-between px-10">
        <img src={Logo} alt="logo" />
        </div>
    </div>
    </div> 
    </>)
};
export default SideBar;