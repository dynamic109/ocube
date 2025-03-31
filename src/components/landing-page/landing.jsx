import Header from "../header";
import Hero from "./hero";
import HeroPrimary from "./HeroPrimary"
import HeroSecondary from "./HeroSecondary"
function LandingPage() {
  return (
    <div className="max-w-[1400px] mx-auto ">
      <Header />
      <Hero />
      <HeroPrimary />
      <HeroSecondary />
    </div>
  );
}

export default LandingPage;
