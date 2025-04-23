import React from "react";
import Header from "../header";
import Logo from "../../assets/Logo.svg";

function About() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="  px-10   py-6">
        <h1 className=" text-4xl font-bold px-4 mb-5">About</h1>
        <div className="flex justify-center items center gap-10">
          <div>
            <p>
              ocube was founded by XYZ, a passionate lifelong learner and XYZ, a{" "}
              <br /> missionary educator who came together to share their
              passion for <br />
              education and technology with the world. Together, they created{" "}
              <br /> ocube with the goal of empowering learners of all ages and{" "}
              <br />
              backgrounds to explore their interests and develop new skills.
              With <br /> their commitment to making education accessible and
              engaging, XYZ <br />
              and XYZ have built a platform that inspires and supports learners
              everywhere.
            </p>
            <div className="relative mt-4">
              <img
                src="/two-hands.png"
                alt=""
                className="w-[649px] h-[389px] "
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={Logo} alt="" className="w-[125px] h-[30px]" />{" "}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 border border-teal-400 p-4 rounded-lg">
            <p className="mb-15 px-4 ">
              Our mission at XYZ is to empower individuals to pursue their
              passion <br />
              for technology by providing them with comprehensive and engaging{" "}
              <br />
              courses. Our platform is designed to help you explore different
              areas <br />
              of tech, from coding to cybersecurity, and learn from industry
              experts. <br /> Whether you're looking to switch careers, pursue a
              new hobby, or <br /> simply gain a deeper understanding of tech,
              our courses <br />
              and resources are here to help. <br />
              Start your journey today and join a community of learners who
              share <br /> your passion for technology. Let's learn together!"
            </p>

            <img
              src="/Tutor-Image-2.svg"
              alt=""
              className=" px-4 rounded-xl w-full"
            />
          </div>
        </div>
      </div>

      <div>
        <footer>
          <hr className="border-t border-grey-300 my-10 w-1/2 mx-auto " />

          <div className="flex justify-center items-center gap-5 lg:gap-60 lg:m-9 lg:flex-row flex-col ">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <p>2022 All right reserved.</p>
            </div>
            <div className=" flex   lg:flex gap-5">
              <a href="#">
                {" "}
                <img src="/Facebook.svg" alt="" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src="/Instagram.svg" alt="" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src="/Twitter.svg" alt="" />{" "}
              </a>
              <a href="#">
                {" "}
                <img src="/Linkedin.svg" alt="" />{" "}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default About;
