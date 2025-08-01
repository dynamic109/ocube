import React, { useState } from "react";
import Logo from "/Logo.png";
import { useAuth } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Signin = () => {
  const { handleSignup } = useAuth();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, phonenumber, password, confirmPassword } = userDetails;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSignup(name, email, phonenumber, password);
      toast.success("Registration successful");
      navigate("/Dashlogin");
    } catch (error) {
      toast.warning(error);
    }
  };
  return (
    <>
      <section className="">
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
          <div className=" flex  flex-col justify-center  items-center">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <h1 className="text-[28px] text-center font-bold">
                Create an account
              </h1>
              <p className="text-[#1B1C1E]  text-center text-[14px]">
                Enter your details to create an ocube account.
              </p>
              <div className="flex flex-col mt-6 justify-between gap-4">
                <div className="mt-6">
                  <label className="text-sm:text-[16px]  font-medium">
                    Full Name
                  </label>
                  <input
                    onChange={handleChange}
                    name="name"
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                    placeholder="Enter full name"
                    value={name}
                  />
                </div>

                <div className="mt-6">
                  <label className="text-lg sm:text-[16px] font-medium">
                    Email Adress
                  </label>
                  <input
                    name="email"
                    onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                    placeholder="Enter email address"
                    value={email}
                  />
                </div>

                <div className="mt-6">
                  <label className="text-lg  sm:text-[16px] font-medium">
                    Phone Number
                  </label>
                  <input
                    name="phonenumber"
                    onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                    placeholder="Enter Phone Number"
                    type="numbers"
                    value={phonenumber}
                  />
                </div>

                <form className="mt-6">
                  <div className="flex justify-between">
                    <label className=" ml-2  text-lg font-medium">
                      Password
                    </label>
                    <button className="text-[#148E88]  text-end">
                      {" "}
                      forgot password?
                    </button>
                  </div>
                  <input
                    name="password"
                    onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                  />
                </form>

                <form className="mt-6">
                  <div className="flex justify-between">
                    <label className=" ml-2 sm:text-[16px] text-lg font-medium">
                      Password
                    </label>
                    <button className="text-[#148E88]  text-end">
                      Confrim password?
                    </button>
                  </div>
                  <input
                    onChange={handleChange}
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                    placeholder="Confrim password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                  />
                </form>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#148E88] mt-6 text-white rounded-xl  hover:text-teal-700 transition duration-200 p-3"
            >
              Create Account
            </button>

            <div className=" flex flex-row sm:flex-col text-center p-2">
              <p>Already have an account? </p>{" "}
              <a href="/Dashlogin">
                <button className="  hover:text-teal-700 transition duration-200 text-[#148E88]">
                  Login
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signin;
