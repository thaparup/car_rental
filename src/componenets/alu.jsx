import React, { useState } from "react";
import Logo from "../assets/logo/logo.png";
import { FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className="flex justify-around">
      <div className="">
        <a href="">
          <img src={Logo} height={143} width={143} className="" />
        </a>
      </div>

      <div className="text-md font-medium gap-5 text-pmBlack self-center mt-3  md:hidden sm:hidden xsm:hidden ">
        <ul className="flex gap-4 ">
          <li className=" transition-colors duration-500 hover:text-pmColor font-rubik">
            <a href="/home">Home</a>
          </li>

          <li className="transition-colors duration-500 hover:text-pmColor font-rubik">
            <a href="/about">About</a>
          </li>

          <li className="transition-colors duration-500 hover:text-pmColor font-rubik">
            <a href="/models">Vehicle Models</a>
          </li>

          <li className="transition-colors duration-500 hover:text-pmColor font-rubik">
            <a href="/testimonials">Testimonials</a>
          </li>

          <li className="transition-colors duration-500 hover:text-pmColor font-rubik">
            <a href="/teams">Our Team</a>
          </li>

          <li className="transition-colors duration-500 hover:text-pmColor font-rubik">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="text-md font-medium self-center mt-2 md:hidden sm:hidden xsm:hidden font-rubik ">
        <a href="" className="pr-6">
          Sign In
        </a>
        <a
          href=""
          className="bg-pmColor text-white font-semibold rounded-[0.2rem]  px-[2rem] py-[0.9rem] shadow-boxShadowRed transition-shadow duration-300 hover:shadow-boxShadowRedHover"
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
    </nav>
  );
}
