import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FiBookOpen } from "react-icons/fi";
import { RiTimerLine, RiFileList3Line } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { BsMeta } from "react-icons/bs";
const tasks =[
    {
        taskimg:<RiTimerLine />,
        tasktext:"Total Learning Hour",
        tasknum:"2",

    },
    {
        taskimg:<FiBookOpen />,
        tasktext:"Completed Courses",
        tasknum:"4",

    },
    {
        taskimg:<RiFileList3Line/>,
        tasktext:"Total Task Completed",
        tasknum:"5",

    },
    {
        taskimg:<IoIosPeople/>,
        tasktext:"Rank score",
        tasknum:"1",

    },
]
const tasks2 =[
    {
        taskimg2:< img src="/google.png" alt="google"/>,
        tasklogo2:< FcGoogle/>,
        tasktext2:"Google UX Design",
        taskp2:"srxcvjnxzes67ogkjvhcgfdzswA4K5SUDTMCGHBVCXDZSYRMFHXBVZRSDUYCJHBVGFZRYFGX",
        tasknum2:"2",

    },
    {
        taskimg2:<img src="/meta.png" alt="meta"/>,
        tasklogo2:<BsMeta/>,
        tasktext2:"Completed Courses",
        taskp2: "refvrdthgvhioifurtdfogljbkmnbfxstudcghbglk",
        tasknum2:"4",
        

    },
]

 const Dashboard = () => {
  return (
    <section className="m-auto p-auto ">
            <div className=" p-6">
              <h1 className="font-bold text-2xl pt-5">Dashboard</h1>
              <p className="text-[grey]">
               welcome back {""},Learn something new today.
              </p>
              <div className="flex px-6 mt-3 w-[100%] placeholder-gray-600 rounded-2xl items-center border">
                <CiSearch />
                <input
                  className="  "
                  type="text"
                  placeholder="Search for anything here "
                />{" "}
              </div>
               
               <div className=' flex mt-3 justify-between '>
               {tasks.map((item, index) => (
                <div className=' bg-[#f7f3f3] p-6 border-amber-100 rounded-sm'
                key={index}>
                    <div className='flex gap-2 items-center '>
               <p className= ' bg-[#A2E7E4] p-4 text-white rounded-3xl'>{item.taskimg}</p> 
                  <div className='flex-col'>
                    <p className='text-[#7B7B7B]'>{item.tasktext}</p>
                  <p>{item.tasknum}</p>
                  </div>
                </div>
                </div>
               ))}
</div>
               <div>
               <div className=' flex mt-3 justify-between '>
               {tasks2.map((item, index) => (
                <div className='  p-6 rounded-sm'
                key={index}>
                    <div className='flex gap-2 items-center '>
               <p className= ' p-4 text-white'>{item.taskimg2}</p> 
                  <div className='flex-col'>
                    <p className='text-[#7B7B7B]'>{item.tasklogo2}</p>
                  <p>{item.tasktext2}</p>
                  <p>{item.taskp2}</p>
                  </div>
                </div>
                </div>
               ))}
               </div>

</div>
              </div>
              </section>
  )
}
export default Dashboard;