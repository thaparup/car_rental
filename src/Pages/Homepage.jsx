import React from "react";
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
  return (
    <section>
      <HeroSection />
      <BookACar />
      <PlanTip />
      <VehicleModels />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Download />
      <Footer />
    </section>
  );
}
