import React from "react";
import BgShape from "../assets/hero/hero-bg.png";
import Navbar from "./Navbar";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons";

export default function HeroSection() {
  return (
    <section className="">
      <Navbar />

      <div className="absolute top-0 right-0 ">
        <img src={BgShape} alt="" className="" />
      </div>
      <div className="bg-red-400 relative">
        <h4>Plan your trip now</h4>
        <h1>
          Save <span>big</span> with our car rental
        </h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <div className="">
          <a href="" className="" to="/">
            Book Ride &nbsp; <IconCircleCheck />
          </a>
          <a href="/">
            Learn More &nbsp; <IconChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
}
