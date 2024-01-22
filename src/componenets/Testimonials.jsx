import React from "react";
import img1 from "../assets/testimonials/pfp1.jpg";
import img2 from "../assets/testimonials/pfp2.jpg";
import { TbQuote } from "react-icons/tb";
export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="flex flex-col">
        <div className="flex flex-col max-w-[40rem] mx-auto">
          <h4 className="text-2xl text-center font-semibold font-poppins">
            Reviewed by People
          </h4>
          <h2 className="text-[2.7rem]  font-poppins text-center font-semibold ">
            Client's Testimonials
          </h2>
          <p className="text-gray-700 text-center ">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="mx-[7.2rem] flex gap-9 mt-16 ">
          <div className="bg-white px-8 py-14 rounded-md shadow-boxShadow">
            <p className="text-2xl font-semibold font-poppins">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>

            <div className="flex justify-between">
              <div className="flex gap-3">
                <img src={img1} alt="" height={60} width={60} />
                <div>
                  <h4>Harry Potter</h4>
                  <h4>Belgrade</h4>
                </div>
              </div>
              <TbQuote size={44} className="text-pmColor" />
            </div>
          </div>
          <div className="bg-white px-8 py-14 rounded-md shadow-boxShadow">
            <p className="text-2xl font-semibold font-poppins">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>

            <div className="flex justify-between">
              <div className="flex gap-3">
                <img src={img2} alt="" height={60} width={60} />
                <div>
                  <h4>Harry Potter</h4>
                  <h4>Belgrade</h4>
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
