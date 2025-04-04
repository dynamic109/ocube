import React from 'react'
import { CiSearch ,CiStar  } from "react-icons/ci";
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
        taskp2:"You will create designs on paper and in digital design tools like Figma and Adobe XD. By the end of the certificate program, you will have a professional UX portfolio that includes three end-to-end projects.VGFZRYFGX",
        tasknum2:"210/22 lessons",

    },
    {
        taskimg2:<img src="/meta.png" alt="meta"/>,
        tasklogo2:<BsMeta/> ,
        tasktext2:"Intro to Front-End Dev.",
        taskp2: "This course is a good place to start if you want to become a web dveloper. You will learn about the day-to-day responsibilities of a web developer and get a general understanding.",
        tasknum2:"10/22 lessons",
        

    },
]
const task3 = [
  { 
   taskimg3:<img className='bg-white p-5' src="/inst.png" alt=""/>,
   taskinst: "Instructor",
   taskcourse:"Best Course",
   taskstudent:"Student",
   taskratting:"Ratting",

  },
  { 
    taskimg3:<img  src="/inst1.png" alt=""/>,
    taskinst: "Johnathan Nuel",
    taskcourse:"Graphic Design Basics: Core Principles for Visual Design",
    taskstudent:"113,949",
    taskratting:<CiStar/> ,
 
   },
   { 
    taskimg3:<img bg-white p-2 src="/inst2.png" alt=""/>,
    taskinst: "Tomi Falana",
    taskcourse:"Fundamentals of DSLR Photography",
    taskstudent:"89,647",
    taskratting:<CiStar/>,
 
   },
   { 
    taskimg3:<img  src="/inst3.png" alt=""/>,
    taskinst: "Esther Mark",
    taskcourse:"Creative Writing: Crafting Personal Essays with Impact",
    taskstudent:"57,018",
    taskratting:<CiStar/>,
 
   },
   { 
    taskimg3:<img  src="/inst4.png" alt=""/>,
    taskinst: "Elizabeth Ressler",
    taskcourse:"Plants at Home: Uplift Your Spirit & Your Space",
    taskstudent:"32,727",
    taskratting:<CiStar/>,
 
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
               
               <div className=' flex  flex-col md:flex-row gap-3 mt-3 justify-between '>
               {tasks.map((item, index) => (
                <div className=' bg-[#f7f3f3] p-6 border-amber-100 rounded-sm'
                key={index}>
                    <div className='flex gap-2 items-center '>
               <p className= ' bg-[#148E88] p-4 text-white rounded-3xl'>{item.taskimg}</p> 
                  <div className='flex-col'>
                    <p className='text-[#7B7B7B]'>{item.tasktext}</p>
                  <p>{item.tasknum}</p>
                  </div>
                </div>
                </div>
               ))}
</div>
              <h3 className='font-semibold mt-3'> jump back right in</h3>
               <div>
               <div className=' flex  items-center gap-3 flex-col md:flex-row mt-3 w-[90%] justify-between '>
               {tasks2.map((item, index) => (
                <div className=' flex justify-between rounded-sm'
                key={index}>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-2 items-center '>
             {item.taskimg2} 
                  <div className=' flex flex-col'>
                    <p className='text-[#7B7B7B] '>{item.tasklogo2}</p>
                  <p className='font-semibold '>{item.tasktext2}</p>
                  <p className='text-[10px]'>{item.taskp2}</p>
                  <p className='text-[12px]'>{item.tasknum2}</p>
                  </div>
                </div>
                </div>
               ))}
               </div>

</div>

             
              <h2 className='font-semibold mt-2'>Meet the Top Rated Instructors</h2>
              <div >
              {task3.map((item, index) => (
                <div key={index} >
                  <div className='flex flex-col md:flex-row mt-3 items-left justify-between gap-4'>
               <div className='flex gap-3'> {item.taskimg3} <p>{item.taskinst}</p></div> 
                
                <p>{item.taskcourse}</p>
                <p>{item.taskstudent}</p>
                <p>{item.taskratting}</p>
                </div>
                </div>
              ))}
              
             </div>


              </div>
              </section>
  )
}
export default Dashboard;