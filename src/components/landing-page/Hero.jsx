import React from "react";

function Hero() {
  const features = [
    { title: "Interactive", icon: "/medal.svg" },
    { title: "Satisfaction", icon: "/crown.svg" },
    { title: "Mentoring", icon: "/money-send.svg" },
    { title: "Affordable", icon: "/star.svg" },
  ];
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex justify-center px-10 mt-10 gap-4">
        <div className="">
          <h2 className="text-3xl font-bold mt-35">
            The Ultimate way to <br />
            build a <span className="text-teal-700">perfect career.</span>
          </h2>
          <p className="mt-3 ">
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
          <img src="/Frame.svg" className="w-200 h-100" />
        </div>
      </div>
      <p className="text-center mt-4">Platforms That Motivates Us</p>
      <div></div>
      <div className="flex justify-between px-10 m-2">
        <img src="/coursera.svg" alt="" />
        <img src="udemy.svg/" alt="" />
        <img src="/masterclass.svg" alt="" />
        <img src="/skillshare.svg" alt="" />
        <img src="/Udacity.svg" alt="" />
      </div>

      <div className="flex justify-center mt-10 px-10 gap-4">
        <div className="mt-17">
          <h2 className="text-3xl font-bold ">
            Get on board with <br />
            high skilled tutors
          </h2>
          <p className="mt-3">
            We assist you in finding the ideal instructor who will help <br />
            you perform above your potential because we are <br />
            aware that regular tuition is uninteresting.
          </p>
          <button className="bg-teal-700 text-white px-4 py-2 rounded-lg mt-3">
            Start Learning Now!
          </button>
        </div>

        <div>
          <img src="/Tutor-Image.svg" alt="" className="w-200 h-100" />
        </div>
      </div>

      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mt-15">We provide you with the <br/>greatest experiences.</h2>
      </div>

      <div className="flex justify-between w-full max-w-[950px] gap-[50px] items-center mx-auto mt-5">
        {features.map((feature) => (
          <div className=" bg-teal-700  w-[180px] h-[180px] justify-center flex items-center flex-col" >
            <img src={feature.icon} className="w-20 h-20"/>
            <p className="text-white">{feature.title} </p>
          </div>
        ))}
      </div>

     <div className="flex justify-center gap-20 mt-10">
     <div className="mt-40">
<h2 className="text-3xl font-bold ">Get access to <br />
top notch courses</h2>

<p>We assist you in finding the ideal instructor who will help <br />
you perform above your potential because we are <br />
aware that regular tuition is uninteresting.</p>
     </div>

     <div>
      <img className="w-[567px] h-[700px]"src="/Courses.svg" alt="" />
     </div>


     </div>


    </div>
  );
}

export default Hero;
