import React from "react";
import image1 from "../assets/plan/icon1.png";
import image2 from "../assets/plan/icon2.png";
import image3 from "../assets/plan/icon3.png";

export default function PlanTip() {
  return (
    <section className="mx-[4rem] my-32 flex flex-col lg:mx-[3rem] md:mx-[2rem] sm:mx-[1rem] xsm:mx-[1rem] ">
      <h3 className="text-center text-2xl font-semibold">Plan your trip now</h3>
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
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </section>
  );
}
