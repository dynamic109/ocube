// import { meta } from "@eslint/js";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const url = "https://ocube-backend.vercel.app";

  const handleLogin = async (email, password) => {
    const res = await fetch(`${url}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.user.verificationToken);
      setUserData(data.user);
    } else {
      throw new Error(data.message || "Login failed");
    }
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ userData, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
