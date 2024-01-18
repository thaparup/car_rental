import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function BottomBanner() {
  return (
    <section className="">
      <div className="bg-[url('/src/assets/banners/book-banner.png')] flex w-full">
        <h3 className="text-3xl text-white font-bold font-poppins">
          Book a car by getting in touch with us
        </h3>
        <div className="flex gap-3 text-pmColor ">
          <FaPhoneAlt size={24} className="" />
          <p className="font-medium text-lg">123-456-789</p>
        </div>
      </div>
    </section>
  );
}
