import React from "react";
import Logo from "/Logo.png";

import { useState } from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { RiGraduationCapFill, RiLogoutBoxRFill } from "react-icons/ri";
import { IoFileTrayFullSharp, IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navitems = [
  {
    itemname: "Dashboard",
    icon: <TbLayoutDashboard />,
    route: "/dashboard",
  },

  {
    itemname: "Courses",
    icon: <RiGraduationCapFill />,
    route: "/dashboard/courses",
  },

  {
    itemname: "Resources",
    icon: <IoFileTrayFullSharp />,
    route: "/dashboard/resources",
  },

  {
    itemname: "Settings",
    icon: <IoSettingsOutline />,
    route: "/dashboard/Settings",
  },
];

const SideBar = () => {
  return (
    <>

  
    <div >
      <div className="m-auto  p-auto ">
        <div className="bg-[#f0f6f6] hidden p-6, z-[1000] fixed h-full  w-60 lg:flex flex-col  shadow-sm">
          <div className="flex  items-center justify-between p-3">
            <img src={Logo} alt="logo" />
          </div>

          <div className=" p-2 flex-col">
            <ul className="mt-3 text-black ">
              {Navitems.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 rounded space-y-2 hover:shadow hover:bg-[#148E88] hover:text-[white] p-2"
                >
                  <Link
                    className="flex text-center items-center gap-2"
                    to={item.route}
                  >
                    <>{item.icon}</>
                    {item.itemname}
                  </Link>
                </li>
              ))}

              <div>
                <li className="mb-2 mt-auto rounded hover:shadow hover:bg-[#148E88] hover:text-[white] py-2 px-3">
                  <Link
                    className="flex text-center mt-auto items-center gap-2"
                    to="/Dashlogin"
                  >
                    <>
                      <RiLogoutBoxRFill />
                      Log out
                    </>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default SideBar;
