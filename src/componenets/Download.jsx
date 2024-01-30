import React from "react";
import Img1 from "../assets/download/appstore.svg";
import Img2 from "../assets/download/googleapp.svg";

export default function Download() {
  return (
    <section className="py-[8rem]  px-[7.2rem] lg:px-[6.2rem] md:px-[5.2rem] sm:px-[3.8rem] xsm:px-[1.4rem] bg-[url('src/assets/banners/bg02.png')]  h-auto bg-no-repeat bg-cover bg-[#f8f8f8]">
      <div className="flex flex-col gap-6 max-w-[35rem] ">
        <h2 className="text-[2.7rem] font-bold font-poppins md:text-center sm:text-center xsm:text-center">
          Download our app to get most out of it
        </h2>
        <p className="text-gray-700 md:text-center sm:text-center xsm:text-center">
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className="flex gap-8 sm:flex-col sm:gap-8 w-[60%] sm:mx-auto xsm:flex-col xsm:gap-8 xsm:w-[60%] xsm:mx-auto md:mt-7 sm:mt-7 xsm:mt-7">
          <img src={Img1} alt="" className="" />
          <img src={Img2} alt="" />
        </div>
      </div>
    </section>
  );
}
