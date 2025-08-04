import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;

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

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user data");
  };

  return (
    <AuthContext.Provider
      value={{ userData, handleLogin, handleLogout, handleSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
