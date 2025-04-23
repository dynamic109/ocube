import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Routes } from "react-router";
import LandingPage from "./components/landing-page/landing";
import Dashlogin from "./components/dashboard/Dashlogin";
import Signin from "./components/dashboard/Signin";
import Resources from "./components/dashboard/Resources";
import Course from "./components/dashboard/Course";
import Dashlayout from "./components/Layout/Dashlayout";
import Dashboard  from "./components/dashboard/Dashboard";
import About from "./components/dashboard/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* regular pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/Dashlogin" element={<Dashlogin />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="about" element={<About />} />


          {/* dashboard pages with sidebar */}
          <Route path="/dashboard" element={<Dashlayout />}>
           
            <Route index element={<Dashboard/>} />
            <Route path="courses" element={<div>{<Course />}</div>} />
            <Route path="resources" element={<Resources />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
