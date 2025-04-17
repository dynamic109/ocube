import React from 'react';
const DashCard = ({ courseimg, title, author, text, progress, total }) => {
  return (
    <div className="bg-white rounded-2xl mb-2 items-center  shadow-xl py-12 md:shadow md:w-[50%] px-3 md:p-4  ">
       
     <div className='flex  gap-3'> {courseimg }
     <div className='flex flex-col gap-2'><p className="text-sm text-gray-500 mb-2"> {author}</p>
     <h3 className="font-semibold ">{title}</h3>
     <p className='text-[10px]'>  {text} </p>
     <div className="w-[full] bg-gray-200 h-1 rounded-full">
        <div
          className="bg-[#148E88] h-1 rounded-full">
           {/* style={{ width: $( {progress} /{total}* 100) % }}  */}
        </div>
      
      <div className='flex  justify-between gap-0'>
      <div className="text-sm  mb-1">
        {progress}/{total} lessons
      </div>
      <button className='border-none text-[12px] text-[#148E88]'>continue to course </button>
      </div>
      </div>
     </div>
     </div>
    
    </div>
    );
};

export default DashCard;