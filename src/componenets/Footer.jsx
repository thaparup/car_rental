import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <section className="px-[3rem]  py-24 flex justify-evenly lg:flex-wrap md:flex-wrap sm:flex-wrap xsm:flex-wrap">
      <div className="lg:w-1/2 lg:flex lg:flex-col lg:items-center md:w-1/2 md:flex md:flex-col md:items-center sm:w-1/2 sm:flex sm:flex-col sm:items-center xsm:w-full xsm:flex xsm:flex-col xsm:items-center ">
        <div>
          <span className="text-[1.5rem] font-bold ">CAR</span>
          <span className="text-[1.5rem] font-poppins pl-[0.3rem] inline-">
            Rental
          </span>
        </div>
        <p className="text-[#777777] text-[1rem] py-5 max-w-[18rem] leading-relaxed ">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <div className="flex gap-3 mt-4 ">
          <FaPhoneAlt size={24} className="" />
          <p className="font-semibold"> (123)-456-789</p>
        </div>
        <div className="flex gap-4 font-medium py-2 mt-3">
          <MdOutlineEmail size={24} className="self-center" />
          <p className="font-semibold text-[0.9rem]">car_rental@gmail.com</p>
        </div>
      </div>
      <div className="lg:w-1/2 lg:flex lg:flex-col lg:items-center md:w-1/2 md:flex md:flex-col md:items-center sm:w-1/2 sm:flex sm:flex-col sm:items-center xsm:w-full xsm:flex xsm:flex-col xsm:items-center xsm:mt-16 ">
        <h2 className="text-[1.5rem] font-bold">Compmay</h2>
        <div className=" text-[1rem] flex flex-col gap-4 mt-3">
          <Link
            to=""
            className="hover:text-pmColor transition-colors duration-300 ease-in-out"
          >
            New York
          </Link>
          <Link
            to=""
            className="hover:text-pmColor transition-colors duration-300 ease-in-out"
          >
            Careers
          </Link>
          <Link
            to=""
            className="hover:text-pmColor transition-colors duration-300 ease-in-out"
          >
            Mobile
          </Link>
          <Link
            to=""
            className="hover:text-pmColor transition-colors duration-300 ease-in-out"
          >
            Blog
          </Link>
          <Link
            to=""
            className="hover:text-pmColor transition-colors duration-300 ease-in-out"
          >
            How we work
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 lg:flex lg:flex-col lg:gap-3 md:gap-3 lg:items-center lg:mt-20 sm:mt-20 md:w-1/2 md:flex md:flex-col md:items-center md:mt-20 sm:w-1/2 sm:flex sm:flex-col sm:items-center xsm:w-full xsm:flex xsm:flex-col xsm:items-center xsm:mt-16">
        <h2 className="text-[1.5rem] font-bold">WORKING HOURS</h2>
        <div className="flex flex-col gap-4 mt-3">
          <p className="text-[1rem]">Mon - Fri 9: 00AM - 9:00PM</p>
          <p className="text-[1rem]">Sat:9:00AM - 19:00PM</p>
          <p className="text-[1rem]">Sun:Closed</p>
        </div>
      </div>

      <div className=" w-[17rem] flex flex-col gap-2 lg:gap-3 md:gap-3 sm:gap-3 lg:w-1/2  lg:flex lg:flex-col lg:items-center lg:mt-20 md:w-1/2  md:flex md:flex-col md:items-center md:mt-20 sm:w-1/2 sm:flex sm:flex-col sm:items-center sm:mt-20 xsm:w-full xsm:flex xsm:flex-col xsm:items-center xsm:mt-16">
        <h2 className="text-[1.5rem] font-bold">SUBSCRIPTION</h2>
        <p className=" text-[1.0rem] xsm:text-center">
          Subscribe your Email address for latest news & updates.
        </p>
        <div className="mt-2 lg:bg-yellow-200 lg:w-[60%] md:w-[60%] sm:w-full xsm:w-full">
          <input
            type="text"
            className="px-12 lg:w-full md:w-full sm:w-full xsm:w-full py-3 bg-[#ececec] outline-none w-full placeholder:text-sm placeholder:font-medium"
            placeholder="Enter Email Address"
          />
        </div>
        <button className="bg-pmColor text-white text-md font-medium py-4 rounded-sm lg:w-[60%]  md:w-[60%] sm:w-full xsm:w-full  xsm:mt-1">
          Submit
        </button>
      </div>
    </section>
  );
}
