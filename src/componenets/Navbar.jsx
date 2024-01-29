import React, { useState } from "react";
import Logo from "../assets/logo/logo.png";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleNav = () => {};

  const handleImageload = () => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, [400]);
  };

  return (
    <nav className="">
      <div
        className={` ${
          nav
            ? "transition-all duration-500 ease-out w-full h-screen flex flex-col gap-6  bg-white"
            : " relative transition-all duration-500 ease-in-out h-0 opacity-0"
        }`}
      >
        <button onClick={() => setNav(false)} className=" self-end m-9">
          {nav && (
            <FaTimes size={34} className="text-pmColor" onClick={handleNav} />
          )}
        </button>
        <div className="self-center mt-24 text-center">
          <ul className="flex flex-col gap-10 text-[1.4rem] font-medium">
            <li>
              <a href="/home">Home</a>
            </li>

            <li>
              <Link onClick={() => setNav(false)} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setNav(false)} to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link onClick={() => setNav(false)} to="/testimonials">
                Testimonials
              </Link>
            </li>

            <li>
              <Link onClick={() => setNav(false)} to="/team">
                Our Team
              </Link>
            </li>

            <li>
              <Link onClick={() => setNav(false)} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section
        className={`${
          nav
            ? "hidden"
            : "absolute flex justify-between z-20 max-w-[133rem] w-full h-auto  items-center py-[2rem] mx-auto top-0 left-0 right-0  px-[6rem] lg:px-[5rem] md:px-[4rem] sm:px-[3rem] xsm:px-[1rem]"
        }`}
      >
        <div className="min-h-[60px] min-w-[160px">
          <a href="">
            <img
              src={Logo}
              height={143}
              width={143}
              onLoad={handleImageload}
              className={`${
                isImageLoaded ? "visible translate-y-[6px]" : "hidden"
              }`}
            />
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
          className={`${
            nav
              ? "hidden"
              : "right-0  hidden flex-col gap-1  self-center mt-2 md:flex sm:flex xsm:flex"
          }`}
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
