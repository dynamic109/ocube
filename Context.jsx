import { createContext, useContext, useState,  } from "react";

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
      setUserData(data.user);
    } else {
      throw new Error(data.message || "Login failed");
    }
  };

  // Signup
  const handleSignup = async (name, email, phonenumber, password) => {
    const res = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phonenumber, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Error creating account:", data.message);
    }
  };

  // Logout → clear everything
  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("token");
  };






  // where i am getting the  profile from backend
  const handleFetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const res = await fetch(`${baseUrl}/api/profile/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setUserData(data);
      } else {
        console.error(data.message || "Failed to fetch profile");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        handleLogin,
        handleLogout,
        handleSignup,
        handleFetchUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);