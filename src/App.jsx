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
import Download from "./componenets/Download";
import Footer from "./componenets/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import VehicleModel from "./componenets/VehicleModel";
import TestimonialsPage from "./Pages/TestimonialsPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <HeroBg />
      <Navbar /> */}
      {/* <HeroSection />
      <BookACar />
      <PlanTrip />
      <VehicleModels />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Download />
      <Footer /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<VehicleModel />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
