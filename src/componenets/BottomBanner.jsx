import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function BottomBanner() {
  return (
    <section className="">
      <div className="bg-[url('/src/assets/banners/book-banner.png')] py-12 relative">
        <div className="bg-[#2d2d2d] w-full py-12 opacity-90 absolute right-0 top-0 h-full"></div>

        <div className="flex justify-center items-center gap-12 py-6 md:flex-col sm:flex-col xsm:flex-col">
          <h1 className="text-4xl font-poppins text-white font-bold text-center leading-snug relative">
            Book a car by getting in touch with us
          </h1>
          <div className="flex gap-3 text-pmColor ">
            <FaPhoneAlt size={34} className="text-pmColor z-50 " />
            <p className="font-bold text-3xl relative ">123-456-789</p>
          </div>
        </div>
      </div>
    </section>
  );
}
