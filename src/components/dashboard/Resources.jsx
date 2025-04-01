import React from "react";
// import Logo from "/Logo.png";
// import SideBar from "./SideBar";
import { CiSearch } from "react-icons/ci";
const Resources = () => {
  return (
    <>
      <section>
        <div>
          {/* <SideBar /> */}
          <div></div>
          <h1>Resources</h1>
          <p>Enjoy tons of resources to help you jump start your learning</p>
          <div>
            <input type="text" placeholder="Search for any resources here" />{" "}
            <CiSearch />
          </div>
          <div className="flex gap-3">
            <button className="border-1 rounded-sm p-3">All</button>
            <button className="border-1 rounded-sm p-3">Programming</button>
            <button className="border-1 rounded-sm p-3">UX Design</button>
            <button className="border-1 rounded-sm p-3">Typography</button>
            <button className="border-1 rounded-sm p-3">Graphics Design</button>
            <button className="border-1 rounded-sm p-3">Web Design</button>
            <button className="border-1 rounded-sm p-3">Product Design</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Resources;
