import React, { useState } from "react";
import Logo from "../assets/logo/logo.png";
import { FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className="">
      <div
        className={` ${nav ? " w-screen h-screen flex flex-col " : "hidden"}`}
      >
        <div onClick={() => setNav(false)} className="py-10 self-end px-7 ">
          <FaTimes size={34} className="text-pmColor" />
        </div>
        <div className="self-center mt-5">
          <ul className="flex flex-col gap-8 text-xl font-semibold">
            <li>
              <a href="/home">Home</a>
            </li>

            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/about">Vehicle Models</a>
            </li>

            <li>
              <a href="/about">Testimonials</a>
            </li>

            <li>
              <a href="/about">Our Team</a>
            </li>

            <li>
              <a href="/about">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <section className=" relative z-20  flex justify-between px-[7.2rem] py-[1.8rem] lg:px-[1.27rem] lg:py-[1.7rem] md:px-[1.27rem] md:py-[1.7rem] sm:px-[1.27rem] sm:py-[1.7rem] xsm:px-[1.27rem] xsm:py-[1.7rem]">
        <img src={Logo} height={143} width={143} className="" />

        <div className="text-md font-bold gap-5 text-pmBlack self-center mt-3  md:hidden sm:hidden xsm:hidden ">
          <ul className="flex gap-4 ">
            <li className=" transition-colors duration-500 hover:text-pmColor">
              <a href="/home">Home</a>
            </li>

            <li className="transition-colors duration-500 hover:text-pmColor">
              <a href="/about">About</a>
            </li>

            <li className="transition-colors duration-500 hover:text-pmColor">
              <a href="/about">Vehicle Models</a>
            </li>

            <li className="transition-colors duration-500 hover:text-pmColor">
              <a href="/about">Testimonials</a>
            </li>

            <li className="transition-colors duration-500 hover:text-pmColor">
              <a href="/about">Our Team</a>
            </li>

            <li className="transition-colors duration-500 hover:text-pmColor">
              <a href="/about">Contact</a>
            </li>
          </ul>
        </div>

        <div className="text-md font-semibold self-center mt-2 md:hidden sm:hidden xsm:hidden">
          <a href="" className="pr-6">
            Sign In
          </a>
          <a
            href=""
            className="bg-pmColor text-white font-semibold rounded-[0.2rem]  px-[2rem] py-[0.8rem] shadow-boxShadowRed transition-shadow duration-300 hover:shadow-boxShadowRedHover"
          >
            Register
          </a>
        </div>
        <div
          className=" right-0  hidden flex-col gap-1  self-center mt-2 md:flex sm:flex xsm:flex"
          onClick={() => setNav(true)}
        >
          <div className="bg-pmBlack h-[0.2rem] w-[1.8rem] rounded-full shadow-lg py-[2px]"></div>
          <div className="bg-pmBlack h-[0.2rem] w-[1.8rem] rounded-full shadow-lg py-[2px]"></div>
          <div className="bg-pmBlack h-[0.2rem] w-[1.8rem] rounded-full shadow-lg py-[2px]"></div>
        </div>
      </section>
    </nav>
  );
}
