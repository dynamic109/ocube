import React from 'react';
import { CiMenuKebab } from "react-icons/ci";

const DashCard = ({ courseimg, title, author, text, progress, total }) => {
  return (
    <div className="bg-white rounded-2xl mb-2 shadow-md w-full md:w-[50%] p-4">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Course image */}
       <div className="w-full lg:w-[75%]  flex justify-center items-center">

         <div className="w-full ">{courseimg}</div>
       </div>

        {/* Content */}
        <div className="flex flex-col gap-2 w-full">
          <p className="text-sm text-gray-500">{author}</p>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-[12px]">{text}</p>

          {/* Progress bar section */}
          <div className="w-full bg-gray-200 h-1 rounded-full relative">
            <div
              className="bg-[#148E88] h-1 rounded-full"
              style={{ width: `${(progress / total) * 100}%` }}
            ></div>
          </div>

          {/* Info row */}
          <div className="flex justify-between items-center mt-2">
            <div className="text-sm">
              {progress}/{total} lessons
            </div>
            <button className="text-[12px] text-[#148E88]">Continue to course</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashCard;