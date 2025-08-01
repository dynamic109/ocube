import React, { useState } from "react";
import Logo from "/Logo.png";
import { useAuth } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashlogin = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await handleLogin(email, password);
      toast.success("login successful");
      navigate("/dashboard");
    } catch (error) {
      toast.warning(error.message);
    }
    setLoading(false);
  };
  return (
    <>
      <section>
        <div className="">
          {loading ? (
            <div className="flex items-center justify-center flex-col py-40 px-4">
              <p className="text-lg font-semibold">
                Please wait while we log you in...
              </p>
              <div className="border-dotted border-4 animate-spin w-10 h-10 rounded-full mt-4" />
              <img
                src="/undraw_under-construction_c2y1.svg"
                className="w-100 h-100"
              />
            </div>
          ) : (
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
              <div className=" m-auto p-6 flex  flex-col justify-center  my-6   items-center">
                <div>
                  <img src={Logo} alt="logo" />
                </div>
                <div>
                  <h1 className="text-[28px] mt-3 text-center  pb-0 font-bold">
                    Login to your dashboard
                  </h1>
                  <p className="text-[#1B1C1E] text-[14px]  text-center text-lg ">
                    Enter your details to access your dashboard.
                  </p>
                  <div className="flex flex-col mt-6 justify-between gap-4">
                    <div className="mt-6">
                      <label className="text-lg  font-medium">
                        Email Adress
                      </label>
                      <input
                        className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <form className="mt-6">
                      <div className="flex justify-between">
                        <label className=" ml-2 text-base sm:text-[16px]  font-medium">
                          Password
                        </label>
                        <button className="text-[#148E88] text-end">
                          forgot password?
                        </button>
                      </div>
                      <input
                        className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1   "
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </form>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-[#148E88] w-full md:w-[25%] mt-6 text-white rounded-md font-semibold hover:bg-teal-700 transition duration-200  p-3"
                >
                  Login
                </button>

                <div className="flex sm:flex-col  text-center p-2">
                  <p>Don`t have an account? </p>{" "}
                  <a href="/Signin">
                    <button className="text-[#148E88]  hover:text-teal-700 transition duration-200">
                      Register
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Dashlogin;
