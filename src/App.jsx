import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componenets/Navbar";
import HeroSection from "./componenets/HeroSection";
import BookACar from "./componenets/BookACar";
import HeroBg from "./componenets/HeroBg";
import PlanTrip from "./componenets/PlanTrip";
import VehicleModels from "./componenets/VehicleModels";
import Banner from "./componenets/Banner";
import WhyChooseUs from "./componenets/WhyChooseUs";
import Testimonials from "./componenets/Testimonials";
import FAQ from "./componenets/FAQ";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <HeroBg />
      <Navbar /> */}
      <HeroSection />
      <BookACar />
      <PlanTrip />
      <VehicleModels />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default App;
