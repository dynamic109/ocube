
import Header from "../header";
import Hero from "./Hero";
import HeroPrimary from "./HeroPrimary"
import HeroSecondary from "./HeroSecondary"
import { useState } from "react";



function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
   console.log(isOpen)
  
  return (

    <div className="max-w-[1400px] mx-auto ">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    
      <div className={isOpen ?  "hidden" : "block"} >
      <Hero />
      <HeroPrimary />
      <HeroSecondary />
      </div>
    </div>
  );
}

export default LandingPage;
