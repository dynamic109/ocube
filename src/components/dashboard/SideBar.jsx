import React from "react";
import Logo from "/Logo.png";
import { TbLayoutDashboard } from "react-icons/tb";
import { RiGraduationCapFill, RiLogoutBoxRFill } from "react-icons/ri";
import { IoFileTrayFullSharp, IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context";

const Navitems = [
  { itemname: "Dashboard", icon: <TbLayoutDashboard />, route: "/dashboard" },
  { itemname: "Courses", icon: <RiGraduationCapFill />, route: "/dashboard/courses" },
  { itemname: "Resources", icon: <IoFileTrayFullSharp />, route: "/dashboard/resources" },
  { itemname: "Settings", icon: <IoSettingsOutline />, route: "/dashboard/Settings" },
];

const SideBar = ({ isOpen, closeSidebar }) => {
  const { handleLogout } = useAuth();

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-60 bg-[#f0f6f6] z-[1000] shadow-sm
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:flex lg:flex-col
      `}
    >
      <div className="flex items-center justify-between p-3">
        <img src={Logo} alt="logo" />
        <button className="lg:hidden" onClick={closeSidebar}>✖</button>
      </div>

      <ul className="mt-3 text-black p-2 flex-col">
        {Navitems.map((item, index) => (
          <li
            key={index}
            className="mb-2 rounded hover:shadow hover:bg-[#148E88] hover:text-white p-2"
            onClick={closeSidebar}
          >
            <Link className="flex items-center gap-2" to={item.route}>
              {item.icon}
              {item.itemname}
            </Link>
          </li>
        ))}

        <li
          className="mt-auto rounded hover:shadow hover:bg-[#148E88] hover:text-white p-2"
          onClick={closeSidebar}
        >
          <Link
            className="flex items-center gap-2"
            onClick={handleLogout}
            to="/Dashlogin"
          >
            <RiLogoutBoxRFill /> Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
