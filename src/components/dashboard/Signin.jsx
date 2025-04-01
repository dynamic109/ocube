import React from "react";
import Logo from "/Logo.png";
const Signin = () => {
    return( <>
          <section className="m-auto p-6 ">
          <div
                className="bg-no-repeat"
                style={{
                  backgroundImage: "url('/Ocubebg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                    <div  className=" flex  flex-col justify-center  items-center">
                <div>< img src={Logo} alt="logo" /></div>  
                       <div>
                         <h1 className="text-5xl text-center font-semibold"> Create an account</h1>
                         <p className="text-[#1B1C1E] text-center text-lg p-3">Enter your details to create an ocube account.</p>
                         <div>
                         <div className="mt-6">
                                <label className="text-lg font-medium">Full Name</label>
                                <input  className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                                        placeholder="Enter full name"     
                                />
                            </div >


                            
                            <div className="mt-6">
                                <label className="text-lg font-medium">Email Adress</label>
                                <input  className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                                        placeholder="Enter email address"     
                                />
                            </div >

                            <div className="mt-6">
                                <label className="text-lg font-medium">Phone Number</label>
                                <input  className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                                        placeholder="Enter Phone Number"   
                                        type="numbers"  
                                /> 
                            </div >


                            <form className="mt-6">
                               <div className="flex justify-between"><label className=" ml-2 text-lg font-medium">Password</label>
                                <button className="text-[#148E88] text-end"> forgot password?</button></div> 
                            <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                                   placeholder="Enter your password"
                                   type="password"
                            />
                            </form>


                            <form className="mt-6">
                               <div className="flex justify-between"><label className=" ml-2 text-base text-lg font-medium">Password</label>
                                <button className="text-[#148E88] text-end"> Confrim password?</button></div> 
                            <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                                   placeholder="Confrim password"
                                   type="password"
                            />
                            </form>

                         </div>
                         </div>
                      <button className="bg-[#148E88] mt-6 text-white rounded-xl md:w-[40%] p-3">Create Account</button>
                         
                         <div className="flex  text-center p-2">
                            <p>Already have an account? </p> <a href="/Dashlogin" ><button className="text-[#148E88]">Login</button></a>
                         </div>
                    </div>
                    </div>
                    </section>
        
                     
    </>
    )

};
export default Signin;












