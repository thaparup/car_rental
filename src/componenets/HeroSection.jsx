import React from "react";
import BgShape from "../assets/hero/hero-bg.png";
import Navbar from "./Navbar";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons";
import MainCar from "../assets/hero/main-car.png";

export default function HeroSection() {
  return (
    <section className="bg-bg ">
      <Navbar />

      <div className="absolute top-0 right-0 ">
        <img src={BgShape} alt="" className="" />
      </div>

      <div className="flex py-16 mx-[7.2rem] ">
        <div className=" relative pt-16 pl-2 w-[42%]">
          <h4 className="text-[1.5rem] font-bold text-pmBlack font-rubik pb-[0.4rem]">
            Plan your trip now
          </h4>
          <h1 className="text-pmBlack text-[3.3rem] font-bold font-poppins leading-[4rem]">
            Save <span className="text-pmColor">big</span> with our car rental
          </h1>

          <p className="py-5 text-gray-700 ">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex gap-5 pt-5">
            <a
              href=""
              className="flex bg-pmColor px-8 py-4 rounded-sm font-bold text-white shadow-boxShadowRed transitons-shadow duration-300 hover:shadow-boxShadowRedHover "
              to="/"
            >
              <div className="flex gap-2 mt-1">
                <p>Book Ride</p>

                <IconCircleCheck />
              </div>
            </a>
            <a
              href="/"
              className="text-white bg-pmBlack py-5 px-8 flex rounded-sm font-bold shadow-boxShadow"
            >
              Learn More &nbsp;{" "}
              <IconChevronRight className="translate-y-[1px]" />
            </a>
          </div>
        </div>
        <div className="relative z-10 ">
          <img src={MainCar} alt="" className="" />
        </div>
      </div>
    </section>
  );
}
