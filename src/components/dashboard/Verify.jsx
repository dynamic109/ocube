import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Context";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Verify = () => {
  const {
    handleVerifyEmail,
    message,
    isVerified,
    handleResendVerification,
    resendMessage,
  } = useAuth();
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      if (token) {
        setLoading(true);
        await handleVerifyEmail(token);
        setLoading(false);
      }
    };
    verify();
  }, [token, handleVerifyEmail]);

  const handleResend = async () => {
    if (email) {
      setResendLoading(true);
      await handleResendVerification(email);
      setResendLoading(false);
      {
        resendMessage && toast.success(resendMessage);
      }
      navigate("/Dashlogin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {loading ? (
          <div className="flex items-center justify-center flex-col py-40 px-4">
            <p className="text-lg font-semibold">
              Please wait while we verify your account...
            </p>
            <div className="border-dotted border-4 animate-spin w-10 h-10 rounded-full mt-4" />
            <img
              src="/undraw_under-construction_c2y1.svg"
              className="w-100 h-100 mt-6"
              alt="Loading"
            />
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center w-full">
            <h3
              className={`text-2xl font-bold mb-4 ${
                isVerified ? "text-green-600" : "text-red-600"
              }`}
            >
              {isVerified ? "Verification Successful!" : "Verification Failed"}
            </h3>
            <p className="text-gray-700 mb-6">{message}</p>
            {!isVerified && message ? (
              message.toLowerCase().includes("expired") && (
                <div className="w-full flex flex-col items-center mb-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border p-2 rounded mb-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={resendLoading}
                  />
                  <button
                    onClick={handleResend}
                    className="bg-[#148E88] text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-200 w-full"
                    disabled={resendLoading}
                  >
                    {resendLoading ? "Resending..." : "Resend Verification"}
                  </button>
                </div>
              )
            ) : (
              <button
                onClick={() => navigate("/Dashlogin")}
                className={`px-6 py-2 rounded-md font-semibold w-full ${
                  isVerified
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-red-600 text-white hover:bg-red-700"
                } transition duration-200`}
              >
                Go to Login
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
