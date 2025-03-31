import React from "react";
import Logo from "../../assets/Logo.svg"

function HeroSecondary() {
   return (

      <div>

<div className=" flex justify-center items-center gap-40 pt-10">

<div>
<p className="text-3xl font-bold ">Learn just about <br />
anything with your <br />
smartphone</p>

<p>We assist you in finding the ideal instructor who will help <br />
you perform above your potential because we are <br />
aware that regular tuition is uninteresting.</p>

<button className="bg-teal-700 text-white px-4 py-2 rounded-lg mt-3">Try It Out</button>
</div>


<div>
    <img className="w-[560px] h-[590px] mt-10 mb-7" src="/Learn-Image.svg" alt="" />
</div>

</div>


<div className="  bg-teal-700 ">
  
<p className="text-2xl font-bold text-white flex justify-center items-center">Start Skyrocketing your career 
</p>
<p className="flex justify-center items-center text-2xl font-bold text-white">with Ocube today.</p>
<div className="flex justify-center items-center">
<p className="text-white">Access everything you need at a glance</p>
</div>
<div className="flex justify-center items-center">
<button className="bg-white text-teal-500 px-1 py-0.5 rounded-lg mt-3">Start Now</button>

</div>
</div>


<footer >

<hr className="border-t-1 border-grey-300 my-4 w-1/2 mx-auto my-8" />

<div className="flex justify-center items-center gap-60 m-9">
<div>
    <img src={Logo} alt="logo" /> 
</div>
<div>
    <p>2022 All right reserved.</p>
</div>
<div className="flex gap-5">
<a href="#"> <img src="/Facebook.svg" alt=""/>  </a>
    <a href="#"> <img src="/Instagram.svg" alt=""/>  </a>
    <a href="#"> <img src="/Twitter.svg" alt=""/>  </a>
    <a href="#"> <img src="/Linkedin.svg" alt=""/>  </a>
</div>
</div>
</footer>

      </div>



   )





   



}
  export default HeroSecondary;