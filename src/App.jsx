import React from "react";
import { BrowserRouter, Route, Router, } from "react-router-dom";
import { Routes } from "react-router"
import LandingPage from "./components/landing-page/landing";
import Dashlogin from "./components/dashboard/Dashlogin";
import Signin from "./components/dashboard/Signin";
 import Resources from "./components/dashboard/Resources";
function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      
        <Routes>
          <Route path="/"  element={<LandingPage/>}/>
        <Route path="/Dashlogin" element={<Dashlogin />} />
        <Route path="/Signin" element={<Signin/>} /> 
        <Route path="/Resources" element={<Resources/>} /> 
        
          </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
