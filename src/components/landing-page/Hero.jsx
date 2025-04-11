import React from "react";
import Marquee from "react-fast-marquee";

function Hero() {
  const features = [
    { title: "Interactive", icon: "/medal.svg" },
    { title: "Satisfaction", icon: "/crown.svg" },
    { title: "Mentoring", icon: "/money-send.svg" },
    { title: "Affordable", icon: "/star.svg" },
    
  ];
  return (
    <div className="max-w-[1400px] mx-auto  ">
      <div className="flex lg:flex-row flex-col justify-between  items-center px-10 mt-10 ">
        <div className="">
          <h2 className="text-3xl lg:text-[50px] font-bold  m- lg:mt-35 text-center lg:text-left">
            The Ultimate way to 
            build a <br /> <span className="text-teal-700">perfect career.</span>
          </h2>
          <p className="mt-3 text-center lg:text-left ">
            We assist you in forging your own path and provide you
            <br />
            with on-demand skills to help you realize your dreams.
          </p>
          <div className="space-x-4">
            <button className="bg-teal-700 text-white px-4 py-2 rounded-lg mt-3">
              Enroll Now
            </button>
            <button className="border border-teal-700 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-50">
              {" "}
              View Demo
            </button>
          </div>
        </div>
        <div>
          <img src="/Frame.svg" className="w-200 h-100 lg:w-[606px] lg:h-[746px]" />
        </div>
      </div>
      
      <div> <p className="text-center mt-4 ">Platforms That Motivates Us</p></div>

 <div className="hidden lg:block"><Marquee>
     
      <div className="flex justify-between px-10 m-7 lg:flex-row flex-col" >
        <div className="flex lg:gap-30 justify-center items-center gap-7">
        <img src="/coursera.svg" alt=""  className="w-19 lg:w-auto"/>
        <img src="/udemy.svg" alt=""  className="w-19 lg:w-auto"/>
        <img src="/masterclass.svg" alt="" className="w-19 lg:w-auto"/>
        </div>
        <div className="flex justify-center items-center gap-15 mt-3 px-10">
        <img src="/skillshare.svg" alt="" className="w-30 lg:w-auto" />
        <img src="/Udacity.svg" alt="" className="w-30 lg:w-auto"/>
        </div>
       
      </div>
      </Marquee>
      </div>


      <div className="flex justify-between px-10 m-7 lg:hidden flex-col" >
        <div className="flex lg:hidden justify-center items-center gap-7">
        <img src="/coursera.svg" alt=""  className="w-19 lg:w-auto"/>
        <img src="/udemy.svg" alt=""  className="w-19 lg:w-auto"/>
        <img src="/masterclass.svg" alt="" className="w-19 lg:w-auto"/>
        </div>
        <div className="flex justify-center items-center gap-15 mt-3 px-10">
        <img src="/skillshare.svg" alt="" className="w-30 lg:w-auto" />
        <img src="/Udacity.svg" alt="" className="w-30 lg:w-auto"/>
        </div>
       
      </div>






      <div className="flex justify-center items-center  px-10 gap-16 lg:flex-row flex-col">
        <div className="">
          <h2 className=" text-2xl lg:text-[50px] font-bold text-center lg:text-left">
            Get on board with <br />
            high skilled tutors
          </h2>
          <p className="mt-3 text-center lg:text-left">
            We assist you in finding the ideal instructor who will help <br />
            you perform above your potential because we are <br />
            aware that regular tuition is uninteresting.
          </p>
          <button className="bg-teal-700 text-white px-4 py-2 rounded mt-3 block mx-auto lg:inline lg:mx-0">
            Start Learning Now!
          </button>
        </div>

        <div>
          <img src="/Tutor-Image.svg" alt="" className=" w-[300px] h-[500px] lg:w-[560px] lg:h-[800px]" />
        </div>
      </div>

      <div className="flex justify-center lg:flex-row flex-col">
        <h2 className=" text-3xl lg:text-[55px] font-bold mt-15 px-7 text-center lg:mb-20 lg:text-center w-[300px] h-[176px] lg:w-[750px] lg:h-[134px]">We provide you with the greatest  experiences.</h2>
      </div>

      <div className="grid grid-cols-2 w-full lg:max-w-[950px] gap-[15px] place-items-center mx-auto mt-5 lg:grid-cols-4 lg:gap-30 ">
        {features.map((feature,index) => (
          <div key={index} className=" lg:w-[180] lg:h-[180] bg-teal-700  w-[130px] h-[130px] justify-center flex items-center flex-col" >
            <img src={feature.icon} className="w-20 h-20"/>
            <p className="text-white">{feature.title} </p>
          </div>
        ))}
      </div>

     <div className="flex justify-center gap-20 mt-2 lg-mt-10 lg:flex-row lg:gap-76 lg:mt-20 flex-col">
     <div className="mt-10  lg:mt-40">
<h2 className=" text-3xl px-5 lg:text-[50px] font-bold text-center mb-5 lg:text-left ">Get access to <br />
top notch courses</h2>

<p className="px-4 text-center lg:text-left lg:mt-3">We assist you in finding the ideal instructor who will help <br />
you perform above your potential because we are <br />
aware that regular tuition is uninteresting.</p>
     </div>

     <div className="flex flex-col lg:flex-row">
      <img className="lg:w-[567px] lg:h-[700px] order-1 lg:order-none  w-[567px]"src="/Courses.svg" alt="" />
     </div>


     </div>


    </div>
  );
}

export default Hero;
