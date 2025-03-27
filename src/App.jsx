import React from "react";
import Header from "./components/header.jsx";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center text-[#232323] text-[50px] font-[700]">
      <h1 className="">App component 1</h1>
      <h1 className="">App component 2</h1>
      <h1 className="">App component 3</h1>
      <p>Header</p>
      <Header />
    </div>
  );
};

export default App;
