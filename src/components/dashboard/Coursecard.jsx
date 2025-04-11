import React from 'react';
import { CiMenuKebab } from "react-icons/ci";

const CourseCard = ({ courseimg, title, author, students, progress, total }) => {
  return (
    <div className="bg-white rounded-2xl mb-2 shadow-md p-4 w-full max-w-xs">
        <div className='flex flex-col justify-between gap-2 '>
     <div className='flex justify-between'> <p>{courseimg } </p><p><CiMenuKebab /></p></div>
      <h3 className="font-semibold text-[22px]">{title}</h3>
      <p className="text-sm text-gray-500 mb-2"> {author}</p>
       <p> students {students} </p>
       <div className="w-[full] bg-gray-200 h-1 rounded-full">
        <div
          className="bg-[#148E88] h-1 rounded-full">
           {/* style={{ width: $( {progress} /{total}* 100) % }}  */}
        </div>
      </div>
      <div className='flex justify-between gap-0'>
      <div className="text-sm  mb-1">
        {progress}/{total} lessons
      </div>
      <button className='border-none text-[12px] text-[#148E88]'>continue to course </button>
      </div>
      </div>
    </div>
    );
};

export default CourseCard;