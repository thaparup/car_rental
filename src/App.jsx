import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componenets/Navbar";
import HeroSection from "./componenets/HeroSection";
import HeroBg from "./componenets/HeroBg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <HeroBg />*/}
      {/* <Navbar /> */}
      <HeroSection />
    </>
  );
}

export default App;
