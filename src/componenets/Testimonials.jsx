import React from "react";
import img1 from "../assets/testimonials/pfp1.jpg";
import img2 from "../assets/testimonials/pfp2.jpg";
import { TbQuote } from "react-icons/tb";
export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="flex flex-col ">
        <div className="flex flex-col max-w-[41.8rem] mx-auto ">
          <h4 className="text-[1.34rem] text-center font-medium font-rubik">
            Reviewed by People
          </h4>
          <h2 className="text-[2.7rem]  font-poppins text-center font-bold sm:px-3 xsm:px-4">
            Client's Testimonials
          </h2>
          <p className="text-[#777777] text-center mt-4 font-rubik sm:px-4 xsm:px-5">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className=" px-[7.2rem] lg:px-[6rem] md:px-[5rem] sm:px-[3rem] xsm:px-[0rem] flex gap-9 mt-16 md:flex-wrap md:w-[36rem] md:gap-12 md:mx-auto sm:flex-wrap sm:w-[36rem] sm:gap-12 sm:mx-auto xsm:flex-wrap xsm:w-[22rem] xsm:gap-12 xsm:mx-auto">
          <div className="bg-white px-8 py-14 rounded-md shadow-boxShadow xsm:py-6 xsm:px-4">
            <p className="text-[1.3rem] font-medium  font-poppins ">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>

            <div className="flex justify-between mt-6">
              <div className="flex gap-3">
                <img
                  src={img1}
                  alt=""
                  height={60}
                  width={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">Harry Potter</h4>
                  <h4>Belgrade</h4>
                </div>
              </div>
              <TbQuote size={44} className="text-pmColor" />
            </div>
          </div>
          <div className="bg-white px-8 py-14 rounded-md shadow-boxShadow xsm:py-6 xsm:px-4">
            <p className="text-[1.3rem] font-medium font-poppins">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>

            <div className="flex justify-between mt-6">
              <div className="flex gap-3">
                <img
                  src={img2}
                  alt=""
                  height={60}
                  width={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">Ron Rizzly</h4>
                  <h4>Griffin</h4>
                </div>
              </div>
              <TbQuote size={44} className="text-pmColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
