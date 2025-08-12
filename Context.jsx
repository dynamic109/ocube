import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [resendMessage, setResendMessage] = useState(false);

  const handleLogin = async (email, password) => {
    const res = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.user.verificationToken);
      localStorage.setItem("user data", JSON.stringify(data.user));
      // console.log(data.user);
      setUserData(data.user);
    } else {
      throw new Error(data.message || "Login failed");
    }
  };

  const handleSignup = async (name, email, phonenumber, password) => {
    const res = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phonenumber, password }),
    });

    const data = await res.json();
    if (res.ok) {
      console.log(data.message);
    } else {
      console.log("Error creating post request");
    }
  };

  const handleVerifyEmail = async (token) => {
    const res = await fetch(`${baseUrl}/verify-email/${token}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    console.log(res);

    const data = await res.json();
    if (
      res.ok ||
      data.message === "This email address has already been verified."
    ) {
      setMessage(data.message || "Verification successful");
      setIsVerified(true);
      console.log(data);
    } else {
      console.log(data.message);
      setMessage(data.message || "Verification failed");
      setIsVerified(false);
    }
  };

  const handleResendVerification = async (email) => {
    const res = await fetch(`${baseUrl}/resend-verification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setResendMessage(data.message || "Verification email sent.");
    } else {
      setResendMessage(data.message || "Failed to resend verification email.");
    }
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user data");
  };
  console.log(userData);
  return (
    <AuthContext.Provider
      value={{
        userData,
        handleLogin,
        handleLogout,
        handleSignup,
        handleVerifyEmail,
        message,
        isVerified,
        handleResendVerification,
        resendMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
