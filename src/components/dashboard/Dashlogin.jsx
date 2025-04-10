import React from "react";
import Logo from "/Logo.png";
// import dashbg from"/dashbg.jpg";
// import Ocubebg from "./Ocubebg.png";
const Dashlogin = () => {
    return(
        <>
        <section >
            <div>
         <div
                className="bg-no-repeat p-6"
                style={{
                  backgroundImage: "url('/Ocubebg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
            <div  className=" m-auto p-6 flex  flex-col justify-center  my-6   items-center">
        <div>< img src={Logo} alt="logo" /></div>  
               <div>
                 <h1 className="text-[28px] mt-3 text-center  pb-0 font-bold"> Login to your dashboard</h1>
                 <p className="text-[#1B1C1E] text-[14px]  text-center text-lg ">Enter your details to access your dashboard.</p>
                 <div className="flex flex-col mt-6 justify-between gap-4">
                    <div className="mt-6">
                        <label className="text-lg  font-medium">Email Adress</label>
                        <input  className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                                placeholder="Enter email address"     
                        />
                    </div >
                    <form className="mt-6">
                       <div className="flex justify-between"><label className=" ml-2 text-base sm:text-[16px]  font-medium">Password</label>
                        <button className="text-[#148E88] text-end"> forgot password?</button></div> 
                    <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                           placeholder="Enter your password"
                           type="password"
                    />
                    </form>
                 </div>
                 </div>
            <button type="submit" className="bg-[#148E88] lg:w-[25%] mt-6 text-white rounded-md font-semibold hover:bg-teal-700 transition duration-200  p-3">Login</button>
                 
                 <div className="flex sm:flex-col  text-center p-2">
                    <p>Don`t have an account? </p> <a href="/Signin" ><button className="text-[#148E88]  hover:text-teal-700 transition duration-200">Register</button></a>
                 </div>
            </div>
            
            
            </div>
            </div>
        </section>
      

        </>
    )
    
}
export default Dashlogin;