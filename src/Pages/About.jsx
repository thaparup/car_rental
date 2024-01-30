import React from "react";
import Box1 from "../assets/about/icon1.png";
import Box2 from "../assets/about/icon2.png";
import AboutMain from "../assets/about/about-main.jpg";
import image1 from "../assets/plan/icon1.png";
import image2 from "../assets/plan/icon2.png";
import image3 from "../assets/plan/icon3.png";
import BottomBanner from "../componenets/BottomBanner";
import HeroPages from "../componenets/HeroPages";
import Footer from "../componenets/Footer";
export default function About() {
  return (
    <section className="">
      <HeroPages name="About" />

      <div className="flex justify-center gap-12 about sm:flex-wrap xsm:flex-wrap  pt-16 ">
        <div className="w-[26rem] flex">
          <img
            src={AboutMain}
            alt=""
            className=" h-[90%] sm:h-[100%] self-end"
          />
        </div>

        <div className=" w-[26rem] flex flex-col gap-2 ">
          <h3 className="text-[1.35rem] font-medium font-rubik sm:text-center xsm:text-center">
            About Company
          </h3>
          <h2 className="text-[2.5rem] leading-[3rem] font-bold font-poppins sm:text-center xsm:text-center">
            You start the engine and your adventure begins
          </h2>
          <p className="text-[1.04rem] font-rubik text-gray-600 pt-4 w-fit pr-2 sm:text-center xsm:text-center">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>

          <div className="flex pt-8 gap-6">
            <div className="flex flex-col gap-6 translate-y-[8px]">
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
            <div className="flex flex-col gap-6  translate-y-[3px]">
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
            <div className="flex flex-col gap-6  translate-y-[5px] ">
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

      <div className="mx-[4rem] my-32 flex flex-col lg:mx-[3rem] md:mx-[2rem] sm:mx-[1rem] xsm:mx-[1rem] ">
        <h3 className="text-center text-2xl font-semibold">
          Plan your trip now
        </h3>
        <h2 className="text-center text-5xl font-bold py-4 font-poppins">
          Quick & easy car rental
        </h2>

        <div className="pt-16 flex justify-around md:justify-evenly md:flex-wrap sm:flex-col sm:gap-12 xsm:flex-col xsm:gap-12">
          <div className=" w-[19.8rem] sm:mx-auto xsm:mx-auto">
            <img src={image1} alt="" className="mx-auto" />
            <h3 className="text-2xl font-bold text-center">Select Car</h3>
            <p className="text-gray-600  px-4 text-center pt-3 text-[1rem] font-rubik">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="w-[18rem] sm:mx-auto xsm:mx-auto">
            <img src={image2} alt="" className="mx-auto" />
            <h3 className="text-2xl font-bold text-center">Contact Operator</h3>
            <p className="text-gray-600  text-center pt-3 text-[1rem] font-rubik">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="w-[18rem]  md:mt-12 md:mr-[20rem] sm:mx-auto xsm:mx-auto">
            <img src={image3} alt="" className="mx-auto h-[174px]" />
            <h3 className="text-2xl font-bold text-center ">Let's Drive</h3>
            <p className="text-gray-600  text-center pt-3 text-[1rem] font-rubik">
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>

      <BottomBanner />
      <Footer />
    </section>
  );
}
