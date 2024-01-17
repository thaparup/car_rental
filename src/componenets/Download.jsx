import React from "react";
import Img1 from "../assets/download/appstore.svg";
import Img2 from "../assets/download/googleapp.svg";

export default function Download() {
  return (
    <section className="py-[8rem] px-[7.2rem] bg-[url('src/assets/banners/bg02.png')] min-h-[3rem] bg-no-repeat bg-cover">
      <div className="flex flex-col gap-6 max-w-[35rem]">
        <h2 className="text-[2.7rem] font-bold font-poppins">
          Download our app to get most out of it
        </h2>
        <p className="text-gray-700">
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className="flex gap-8">
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
        </div>
      </div>
      <div></div>
    </section>
  );
}
