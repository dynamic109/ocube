import { useEffect, useState } from "react";

import { CiSearch, CiStar } from "react-icons/ci";
import { FiBookOpen } from "react-icons/fi";
import { RiTimerLine, RiFileList3Line } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { BsMeta } from "react-icons/bs";
import TopInstructors from "./Topinstructors";
import DashCard from "./Dashcourse";
import UserProfile from "./userProfile";
const tasks = [
  {
    taskimg: <RiTimerLine />,
    tasktext: "Total Learning Hour",
    tasknum: "14hr 32min",
  },
  {
    taskimg: <FiBookOpen />,
    tasktext: "Completed Courses",
    tasknum: "14",
  },
  {
    taskimg: <RiFileList3Line />,
    tasktext: "Total Task Completed",
    tasknum: "56789",
  },
  {
    taskimg: <IoIosPeople />,
    tasktext: "Rank score",
    tasknum: "140",
  },
];
const yourCourses = [
  {
    courseimg: [<img className="w-[35%]" src="/google.png" alt="google" />],
    title: "Google UX Design",
    author: [<img src="/googleicon.png" alt="googleicon" />],
    text: "You will create designs on paper and in digital design tools like Figma and Adobe XD. By the end of the certificate program, you will have a professional UX portfolio tat icluds three end-to-end projects.",
    progress: 10,
    total: 22,
  },
  {
    courseimg: [<img className="w-[35%]" src="/meta.png" alt="google" />],
    title: "Intro to Front-End Dev.",
    author: [<img src="/metaicon.png" alt="metaicon" />],
    text: "This course is a good place to start if you want to become a web developer. You will learn about the day-to-day responsibilities of a web developer and get a generalunderstanding.",
    progress: 6,
    total: 33,
  },
];

const Dashboard = () => {
  return (
    <section className="m-auto bg-[white]  p-auto ">
      <div className=" p-6">
        <div className=" flex flex-col lg:flex-row justify-between items-center ">
          <h1 className="font-bold text-[34px] pt-5">Dashboard</h1>

          <div>
            <UserProfile />
          </div>
        </div>

        <div className="flex mt-3 "></div>

        <div className=" flex  flex-col  p-3 md:flex-row gap-3 mt-3 justify-between ">
          {tasks.map((item, index) => (
            <div
              className=" bg-[#F5F5F5] shadow  p-6 border-amber-100 rounded-sm"
              key={index}
            >
              <div className="flex gap-2 items-center ">
                <p className=" bg-[#148E88] p-4 text-white rounded-3xl">
                  {item.taskimg}
                </p>
                <div className="flex-col">
                  <p className="text-[#7B7B7B] text-[14px]">{item.tasktext}</p>
                  <p className="text-[24px]">{item.tasknum}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-semibold text center-center text-[24px] mt-3">
          {" "}
          jump back right in
        </h3>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          {yourCourses.map((course, i) => (
            <DashCard key={i} {...course} />
          ))}
        </div>
        <TopInstructors />
      </div>
    </section>
  );
};
export default Dashboard;
