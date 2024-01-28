import React from "react";
import BgShape from "../assets/hero/hero-bg.png";
import Navbar from "./Navbar";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons";
import MainCar from "../assets/hero/main-car.png";

export default function HeroSection() {
  return (
    <section className="bg-bg  relative h-[97vh] px-[6rem] lg:px-[5rem] md:px-[4rem] sm:px-[3rem] xsm:px-[1rem] overflow-hidden">
      <img src={BgShape} alt="" className="absolute top-0 right-0 xsm:hidden" />
      <div className="flex justify-between  mx-auto py-[8rem] sm:py-[3rem]  xsm:py-[3rem] items-center mt-28 ">
        <div className="  relative z-40  w-[32rem] sm:text-center sm:mx-auto xsm:mx-auto  xsm:w-[90%] ">
          <h4 className="text-[1.4rem] font-bold text-pmBlack font-rubik pb-[0.4rem] xsm:text-center">
            Plan your trip now
          </h4>
          <h1 className="text-pmBlack text-[3.3rem] xsm:text-[3rem] lg:text-[3rem] font-bold font-poppins leading-[4rem] xsm:text-center">
            Save <span className="text-pmColor">big</span> with our car rental
          </h1>

          <p className="py-5 text-gray-700 text-[0.96rem] max-w-[85%]  xsm:text-center sm:text-center sm:max-w-full xsm:text-[1rem] xsm:max-w-full">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex gap-5 sm:gap-0 pt-5 xsm:flex-col xsm:gap-4 xsm:pt-6  xsm:w-[17.5rem] xsm:mx-auto">
            <a
              href=""
              className="text-white bg-pmColor py-5 px-8 sm:px-12 xsm:self-center xsm:px-20 flex gap-3 rounded-sm font-bold transition-all duration-300 ease-in-out hover:shadow-boxShadowRed sm:mx-auto "
            >
              <p className="xsm:mx-auto">Book Ride</p>
              <IconCircleCheck className="" />
            </a>
            <div className="text-white bg-pmBlack py-5 px-8 sm:px-12 xsm:self-center xsm:px-20 flex rounded-sm font-bold shadow-boxShadow transition-colors duration-500 ease-out hover:bg-white hover:border-[1px] border-pmBlack hover:text-pmBlack ">
              <p>Learn More</p>
              <IconChevronRight className="translate-y-[1px]" />
            </div>
          </div>
        </div>

        <img
          src={MainCar}
          alt=""
          className="absolute z-20 right-16 w-[55%] sm:hidden xsm:hidden "
        />
      </div>
    </section>
  );
}
