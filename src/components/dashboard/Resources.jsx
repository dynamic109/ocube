import React from "react";
import Logo from "/Logo.png";
// import SideBar from "./SideBar";
import { CiSearch } from "react-icons/ci";
const Resource = [
 
 
 
 
  {
    resourceimg: <img src="/rimg1.png" alt="rimg1" />,
    text: "The Design of Everyday Things",
    by: "By: Don Norma",
  },
  {
    resourceimg:  <img src="/rimg2.png" alt="rimg2" />,
    text: "The Non-Designer's Book",
    by: "By: Robin Williams",
  },
  {
    resourceimg:  <img src="/rimg3.png" alt="rimg3" />,
    text: "UX for Beginners: A Crash Course in 100 Short Lessons",
    by:" By: Joel Marsh",
  },
  {
    resourceimg:  <img src="/rimg4.png" alt="rimg4" />,
    text: "Universal Principles of Design",
    by: "By: William Lidwell",
  },
  {
    resourceimg:  <img src="/rimg5.png" alt="rimg5" />,
    text: "Lean UX: Applying Lean Principles to Improve User Experience",
    by: "By: Josh Seiden",
  },
  {
    resourceimg:  <img src="/rimg7.png" alt="rimg6" />,
    text: "Start With Why",
    by: "By: Simon Sinek",
  },
  {
    resourceimg:  <img src="/rimg6.png" alt="rimg7" />,
    text: "Create Usable Interfaces for Applications and the Web",
    by: "By: Lukas Mathis",
  },
  {
    resourceimg:  <img src="/rimg8.png" alt="rimg8" />,
    text: "Undercover User Experience Design",
    by: "By: William Lidwell",
  },
  {
    resourceimg:  <img src="/rimg9.png" alt="rimg9" />,
    text: "The Design of Everyday Things",
    by: "By: Don Norma",
  },
  {
    resourceimg:  <img src="/rimg10.png" alt="rimg10" />,
    text: "The Design of Everyday Things",
    by: "By: Don Norma",
  },
  {
    resourceimg:  <img src="/rimg11.png" alt="rimg11" />,
    text: "The Design of Everyday Things",
    by: "By: Don Norma",
  },
  {
    resourceimg:  <img src="/rimg12.png" alt="rimg12" />,
    text: "The Design of Everyday Things",
    by: "By: Don Norma",
  },
];
const Resources = () => {
  return (
    <>
      <section className="m-auto p-auto ">
        <div className=" p-6">
          <h1 className="font-bold text-2xl pt-5">Resources</h1>
          <p className="text-[grey]">
            Enjoy tons of resources to help you jump start your learning
          </p>
          <div className="flex px-6 mt-3 w-[100%] placeholder-gray-600 rounded-2xl items-center border">
            <CiSearch />
            <input
              className="  "
              type="text"
              placeholder="Search for anything here "
            />{" "}
          </div>
          <div className=" flex-col  lg:flex-row  w-[100%] mt-3 gap-3">
            <button className="border-1 bg-[#F8F8F8] rounded-xl m-1  p-3">
              All
            </button>
            <button className="border-1 bg-[#F8F8F8] rounded-xl m-1 p-3">
              Programming
            </button>
            <button className="border-1 bg-[#F8F8F8] rounded-xl m-1  p-3">
              UX Design
            </button>
            <button className="border-1 bg-[#F8F8F8] rounded-xl m-1 p-3">
              Typography
            </button>
            <button className="border-1 bg-[#F8F8F8] rounded-xl m-1  p-3">
              Graphics Design
            </button>
            <button className="border-1 bg-[#F8F8F8] rounded-xl m-1 p-3">
              Web Design
            </button>
            <button className="border-1 bg-[#F8F8F8] rounded-xl m-1 p-3">
              Product Design
            </button>
          </div>


          <div className="mt-9 grid md:grid-cols-2 grid-rows-2 lg:grid-cols-4 gap-3 lg:grid-rows-4  ">
              {Resource.map((item, index) => (
                <div
                  key={index}
                >
                  <div
                    className=" gap-3 flex flex-col text-left items-left "
                   >{item.resourceimg} <><p className="font-semibold">{item.text}</p>   <p className="text-[#7B7B7B]">{item.by}</p></>
                   
                  </div>
                </div>
              ))}



</div>
        </div>
      </section>
    </>
  );
};
export default Resources;
