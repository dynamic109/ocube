import React, { Children, useState } from 'react'
import SideBar from '../dashboard/SideBar';
import HamburgerMenu from "../HamburgerMenu";


import { Outlet } from 'react-router-dom';

const Dashlayout = ()  => {
    // console.log(props.children,"props");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
  <> 
  <HamburgerMenu isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

    <div className='pl-0 pr-0  lg:pr-[20px] lg:pl-[20%] lg:p-[auto]'>
      <Outlet/>
    </div>
    </>
  )

};

export default Dashlayout;