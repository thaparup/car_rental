import React from "react";
import CarCard from "./CarCard";
import HeroPages from "./HeroPages";
import BottomBanner from "./BottomBanner";
import Footer from "./Footer";

export default function VehicleModel() {
  return (
    <section>
      <HeroPages name="Vehicle Models" />
      <CarCard />
      <BottomBanner />
      <Footer />
    </section>
  );
}
