import React, { Children } from 'react'
import SideBar from '../dashboard/SideBar';

import { Outlet } from 'react-router-dom';

const Dashlayout = ()  => {
    // console.log(props.children,"props");

  return (
  <> <SideBar/> 
   
    <div className='pl-0 pr-0  lg:pr-[20px] lg:pl-[20%] lg:p-[auto]'><Outlet/></div>
    </>
  )

};

export default Dashlayout;