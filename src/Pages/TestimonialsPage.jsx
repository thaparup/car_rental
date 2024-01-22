import React from "react";
import img1 from "../assets/testimonials/pfp1.jpg";
import img2 from "../assets/testimonials/pfp2.jpg";
import { TbQuote } from "react-icons/tb";

export default function TestimonialsPage() {
  return (
    <section>
      <div className="max-w-[40rem] mx-auto ">
        <div className="mt-16 text-center flex flex-col gap-1">
          <h4 className="text-xl font-semibold font-poppins ">
            Reviewed by People
          </h4>
          <h2 className="text-[2.5rem] font-bold font-poppins">
            Client's Testimonials
          </h2>

          <p className="text-md text-gray-700">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
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
              <img src={img1} alt="" height={60} width={60} />
              <div>
                <h4>Harry Potter</h4>
                <h4>Belgrade</h4>
              </div>
            </div>
            <TbQuote size={44} className="text-pmColor" />
          </div>
        </div>
      </div>
    </section>
  );
}
