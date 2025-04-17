import React from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";

const RecommendedCourseCard = ({ courseimg,  title, author, hours, students }) => {
  return (
    <div className="bg-white rounded-2xl  shadow-md md:w-[100%]  p-4 ">
 <div className='flex flex-col justify-between gap-2 '>
    <div className='flex justify-between'> <p>{courseimg }{/* Placeholder for image */} </p><p><CiMenuKebab /></p ></div> 
    <h3 className="font-semibold ">{title}</h3>
     <div className=' flex justify-between'> <p className="text-sm text-gray-500 mb-2">By: {author}</p>
      <div className='flex gap-0 items-center text-[#148E88]'><p><CiClock2 /></p><span>{hours}</span>
      </div></div>
      
      <div className="flex items-center gap-5 justify-between text-sm text-gray-500 mb-3">
    <div className='flex justify-between gap-2 ' ><div className='flex justify-between items-center text-[#148E88] gap-0'> <p><MdOutlinePeople /></p> <span>{students} students</span></div>
       </div>
      <button className="bg-[#148E88] text-white px-4 py-1 rounded-md">
        Enroll Course
      </button> </div>
    </div>
    </div>
  );
};

export default RecommendedCourseCard;