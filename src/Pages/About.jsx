import React from "react";
import Box1 from "../assets/about/icon1.png";
import Box2 from "../assets/about/icon2.png";
import Box3 from "../assets/about/icon3.png";
import AboutMain from "../assets/about/about-main.jpg";
import PlanTip from "../componenets/PlanTrip";
import image1 from "../assets/plan/icon1.png";
import image2 from "../assets/plan/icon2.png";
import image3 from "../assets/plan/icon3.png";
import BottomBanner from "../componenets/BottomBanner";
import HeroPages from "../componenets/HeroPages";
export default function About() {
  return (
    // max-w-[55rem] mx-auto
    <section className="">
      {/* <div className="flex ">
        <div className="w-[50%] flex">
          <img src={AboutMain} alt="" className=" h-[90%] self-end" />
        </div>

        <div className=" w-[50%] flex flex-col gap-2">
          <h3 className="text-2xl font-semibold font-rubik">About Company</h3>
          <h2 className="text-[2.5rem] leading-[3rem] font-bold font-poppins ">
            You start the engine and your adventure begins
          </h2>
          <p className="text-[1.04rem] text-gray-600 pt-4 w-fit pr-2">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>

          <div className="flex justify-between pt-8 ">
            <div className="flex flex-col gap-6">
              <img src={Box1} alt="car-icon" className="w-fit" />
              <div className=" flex gap-2  m-0 p-0">
                <h4 className="text-[2.8rem] font-bold font-poppins leading-none">
                  20
                </h4>
                <p className=" text-[1.1rem] font-rubik w-[50%] text-gray-600  leading-none">
                  Car Types
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <img src={Box2} alt="car-icon" className="w-fit" />
              <div className=" flex gap-2  m-0 p-0">
                <h4 className="text-[2.8rem] font-bold font-poppins leading-none">
                  85
                </h4>
                <p className=" text-[1.1rem] font-rubik w-[50%] text-gray-600  leading-none">
                  Rental Outlets
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <img src={Box1} alt="car-icon" className="w-fit" />
              <div className=" flex gap-2  m-0 p-0">
                <h4 className="text-[2.8rem] font-bold font-poppins leading-none">
                  75
                </h4>
                <p className=" text-[1.1rem] font-rubik w-[50%] text-gray-600  leading-none">
                  Repair Shop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-32">
        <div className="">
          <h3 className="text-center text-2xl font-semibold">
            Plan your trip now
          </h3>
          <h2 className="text-center text-5xl font-bold py-4 font-poppins">
            Quick & easy car rental
          </h2>

          <div className="pt-16 flex gap-24 w-[83%] self-center ">
            <div className="">
              <img src={image1} alt="" className="mx-auto" />
              <h3 className="text-2xl font-bold text-center">Select Car</h3>
              <p className="text-gray-600  px-4 text-center pt-3">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="">
              <img src={image2} alt="" className="mx-auto" />
              <h3 className="text-2xl font-bold text-center">
                Contact Operator
              </h3>
              <p className="text-gray-600 text-[1rem] text-center pt-3">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="">
              <img src={image3} alt="" className="mx-auto h-[62%]" />
              <h3 className="text-2xl font-bold text-center">Let's Drive</h3>
              <p className="text-gray-600 text-[1rem] text-center pt-3">
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomBanner /> */}

      <HeroPages name="About" />
    </section>
  );
}
