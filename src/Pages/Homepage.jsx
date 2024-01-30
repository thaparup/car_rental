import React, { useRef } from "react";
import HeroSection from "../componenets/HeroSection";
import BookACar from "../componenets/BookACar";
import PlanTip from "../componenets/PlanTrip";
import VehicleModels from "../componenets/VehicleModels";
import Banner from "../componenets/Banner";
import WhyChooseUs from "../componenets/WhyChooseUs";
import Testimonials from "../componenets/Testimonials";
import FAQ from "../componenets/FAQ";
import Download from "../componenets/Download";
import Footer from "../componenets/Footer";

export default function Homepage() {
  const parentInputRef = useRef();
  const parentDivRef = useRef();

  const onClickScroll = () => {
    parentDivRef.current.scrollIntoView({ behaviour: "smooth" });
    parentInputRef.current.focus();
  };
  return (
    <section>
      <HeroSection handleClick={onClickScroll} />
      <BookACar inputRef={parentInputRef} divRef={parentDivRef} />
      <PlanTip />
      <VehicleModels handleClick={onClickScroll} />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Download />
      <Footer />
    </section>
  );
}
