import React from "react";
import Box1 from "../assets/about/icon1.png";
import Box2 from "../assets/about/icon2.png";
import Box3 from "../assets/about/icon3.png";
import AboutMain from "../assets/about/about-main.jpg";
export default function About() {
  return (
    <section className="max-w-[60rem] mx-auto flex ">
      <div className="flex gap-10  mr-16 ">
        <div className="w-full bg-red-200 self-end">
          <img src={AboutMain} alt="" className="" />
        </div>

        <div className=" w-full flex flex-col gap-3 ">
          <h3 className="text-2xl font-semibold">About Company</h3>
          <h2 className="text-[2.5rem] leading-[3rem] font-bold font-poppins">
            You start the engine and your adventure begins
          </h2>
          <p className="text-md text-gray-600 pt-4">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="flex justify-between pt-8 ">
            <div className="flex flex-col gap-3 ">
              <img src={Box1} alt="car-icon" className="w-fit" />
              <span className=" flex gap-2">
                <h4 className="text-[2.8rem] font-bold font-poppins">20</h4>
                <p className=" text-[1.1rem] font-rubik w-[50%] text-gray-600">
                  Car Types
                </p>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <img src={Box2} alt="car-icon" className="w-fit" />
              <span className="flex gap-2">
                <h4 className="text-[2.8rem] font-bold">85</h4>
                <p className=" text-[1.1rem] font-rubik w-[50%] text-gray-600">
                  Rental Outlets
                </p>
              </span>
            </div>
            <div className="flex flex-col gap-3 ">
              <img src={Box3} alt="car-icon" className="w-fit" />
              <span className="flex gap-2">
                <h4 className="text-[2.8rem] font-bold">75</h4>
                <p className=" text-[1.1rem] font-rubik w-[50%] text-gray-600">
                  Repair Shop
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
