import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import LandingPage from "./components/landing-page/landing";
import Dashlogin from "./components/dashboard/Dashlogin";
import Signin from "./components/dashboard/Signin";
import Resources from "./components/dashboard/Resources";
import Course from "./components/dashboard/Course";
import Dashlayout from "./components/Layout/Dashlayout";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/dashboard/About";
import { AuthProvider } from "../Context";
import { ToastContainer } from "react-toastify";
import Verify from "./components/dashboard/Verify";
import ProtectedRoute from "./components/dashboard/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <ToastContainer autoClose={3000} hideProgressBar={false} />
        <BrowserRouter>
          <Routes>
            {/* regular pages */}
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/Dashlogin"
              element={
                <ProtectedRoute>
                  <Dashlogin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Signin"
              element={
                <ProtectedRoute>
                  <Signin />
                </ProtectedRoute>
              }
            />
            <Route path="/verify/:token" element={<Verify />} />
            <Route path="/about" element={<About />} />

            {/* dashboard pages with sidebar */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashlayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="courses" element={<Course />} />
              <Route path="resources" element={<Resources />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
