import React from "react";
import Logo from "/Logo.png";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiGraduationCapFill, RiLogoutBoxRFill } from "react-icons/ri";
import { IoFileTrayFullSharp, IoSettingsOutline } from "react-icons/io5";
import {Link }from "react-router-dom";
const SideBar = () =>{
return(<>
  <div className="m-auto p-auto ">
    
      <div className="hidden p-6, z-[1000] fixed h-full  w-60 lg:flex flex-col  shadow-sm" >
      <div className="flex  items-center justify-between px-10">
        <img src={Logo} alt="logo" />
        </div>
       <div className=" p-2 flex-col  justify-between">
        <ul className="mt-3 text-black ">
          <li className="mb-2 rounded hover:shadow hover:bg-[#148E88] hover:text-[white] p-2">
            <Link className="flex text-center items-center gap-2"  to='/dashboard'>
              <><TbLayoutDashboard /></>
              Dashboard
            </Link >
          </li>
            
          <li className="mb-2 rounded hover:shadow hover:bg-[#148E88] hover:text-[white] p-2">
            <Link className="flex text-center items-center gap-2"  to='/dashboard/courses'>
              <><RiGraduationCapFill /></>
             Courses
            </Link>
          </li>

          <li className="mb-2 rounded hover:shadow hover:bg-[#148E88] hover:text-[white] p-2">
            <Link  className="flex text-center items-center gap-2"  to='/dashboard/resources' > 
              <>
              <IoFileTrayFullSharp />
              Resources</>
            </Link>
          </li>
         

          <li className="mb-2 rounded hover:shadow hover:bg-[#148E88] hover:text-[white] p-2">
            <Link className="flex text-center items-center gap-2"  to='/Settings'> 
              <>
              <IoSettingsOutline />
              Settings</>
            </Link>
          </li>

        </ul>
        </div>
        </div> 
           <div className="px-3 pb-6">
            
          <button className="mb-2 rounded hover:shadow hover:bg-[#148E88] hover:text-[white] py-2 px-3">
            <Link className="flex text-center items-center gap-2"  to='/Dashlogin'> 
              <>
              <RiLogoutBoxRFill />
              Log out</>
            </Link>
          </button>
         
          
        
        </div>
    </div>
   
    </>)
};
export default SideBar;
