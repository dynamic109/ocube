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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { name, email, phonenumber, password, confirmPassword } = userDetails;
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phonenumber) newErrors.phonenumber = "Phone number is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(true);
        await handleSignup(name, email, phonenumber, password);
        toast.success("Registration successful");
        toast.warning("Check your mail for verification message");
        navigate("/Dashlogin");
      } catch (error) {
        // loading(false);
        toast.error(error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <>
      <section className="">
        {loading ? (
          <div className="flex items-center justify-center flex-col py-40 px-4">
            <p className="text-lg font-semibold">
              Your account is being created...
            </p>
            <div className="border-dotted border-4 animate-spin w-10 h-10 rounded-full mt-4" />
            <img
              src="/undraw_under-construction_c2y1.svg"
              className="w-100 h-100"
            />
          </div>
        ) : (
          <div
            className="min-h-screen py-10 px-4"
            style={{
              backgroundImage: "url('/Ocubebg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <div className="max-w-[600px] w-full mx-auto flex  flex-col justify-center  items-center">
              <div className="mb-4">
                <img src={Logo} alt="logo" />
              </div>

              <h1 className="text-[28px] text-center font-bold">
                Create an account
              </h1>
              <p className="text-[#1B1C1E]  text-center text-[14px]">
                Enter your details to create an ocube account.
              </p>
              <div className="w-full">
                <div className="w-full flex flex-col mt-12 justify-center gap-4">
                  <div className="w-full mt-6">
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                      onChange={handleChange}
                      name="name"
                      className={`w-full border-2  rounded-xl p-3 mt-1 ${
                        error.name ? "border-red-500" : "border-gray-100"
                      }`}
                      placeholder="Enter full name"
                      value={name}
                    />
                    <p className="text-red-500 text-xs">{error.name}</p>
                  </div>

                  <div className="mt-6">
                    <label className="text-sm font-medium">Email Adress</label>
                    <input
                      name="email"
                      onChange={handleChange}
                      className={`w-full border-2  rounded-xl p-3 mt-1 ${
                        error.email ? "border-red-500" : "border-gray-100"
                      }`}
                      placeholder="Enter email address"
                      value={email}
                    />
                    <p className="text-red-500 text-xs">{error.email}</p>
                  </div>

                  <div className="mt-6">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input
                      name="phonenumber"
                      onChange={handleChange}
                      className={`w-full border-2  rounded-xl p-3 mt-1 ${
                        error.phonenumber ? "border-red-500" : "border-gray-100"
                      }`}
                      placeholder="Enter Phone Number"
                      type="numbers"
                      value={phonenumber}
                    />
                    <p className="text-red-500 text-xs">{error.phonenumber}</p>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <label className=" ml-2  text-sm font-medium">
                        Password
                      </label>
                      {/* <button className="text-[#148E88]  text-end">
                      forgot password?
                    </button> */}
                    </div>
                    <input
                      name="password"
                      onChange={handleChange}
                      className={`w-full border-2  rounded-xl p-3 mt-1 ${
                        error.password ? "border-red-500" : "border-gray-100"
                      }`}
                      placeholder="Enter your password"
                      type="password"
                      value={password}
                    />
                    <p className="text-red-500 text-xs">{error.password}</p>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <label className=" ml-2 text-sm font-medium">
                        Password
                      </label>
                      <button className="text-[#148E88]  text-end text-sm">
                        Confirm password?
                      </button>
                    </div>
                    <input
                      onChange={handleChange}
                      className={`w-full border-2  rounded-xl p-3 mt-1 ${
                        error.confirmPassword
                          ? "border-red-500"
                          : "border-gray-100"
                      }`}
                      placeholder="Confirm password"
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                    />
                    <p className="text-red-500 text-xs">
                      {error.confirmPassword}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-[#148E88] mt-6 text-white rounded-xl  hover:text-teal-700 transition duration-200 p-3 w-full"
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
          </div>
        )}
      </section>
    </>
  );
};
export default Signin;
