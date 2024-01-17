import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
export default function Footer() {
  return (
    <section className="px-[7.2rem]  py-16 flex justify-between">
      <div className="flex gap-12">
        <div>
          <span className="text-[1.5rem] font-bold">CAR</span>
          <span className="text-[1.5rem] font-poppins pl-[0.3rem]">Rental</span>
          <p className="text-gray-700 text-[1.07rem] py-5 max-w-[18rem]">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div className="flex gap-3">
            <FaPhoneAlt size={24} />
            <p className="font-medium text-lg">123-456-789</p>
          </div>
          <div className="flex gap-4 font-medium py-2">
            <MdOutlineEmail size={24} className="self-center" />
            <p className="font-medium text-lg">car_rental@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] font-bold">Compmay</h2>
          <div className="flex flex-col gap-2 text-[1rem]">
            <a
              href=""
              className="hover:text-pmColor transition-colors duration-300 ease-in-out"
            >
              New York
            </a>
            <a
              href=""
              className="hover:text-pmColor transition-colors duration-300 ease-in-out"
            >
              Careers
            </a>
            <a
              href=""
              className="hover:text-pmColor transition-colors duration-300 ease-in-out"
            >
              Mobile
            </a>
            <a
              href=""
              className="hover:text-pmColor transition-colors duration-300 ease-in-out"
            >
              Blog
            </a>
            <a
              href=""
              className="hover:text-pmColor transition-colors duration-300 ease-in-out"
            >
              How we work
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] font-bold">WORKING HOURS</h2>
          <div className="flex flex-col gap-2">
            <p className="text-[1rem]">Mon - Fri 9: 00AM - 9:00PM</p>
            <p className="text-[1rem]">Sat:9:00AM - 19:00PM</p>
            <p className="text-[1rem]">Sun:Closed</p>
          </div>
        </div>

        <div className="max-w-[17rem] flex flex-col gap-2 ">
          <h2 className="text-[1.5rem] font-bold">SUBSCRIPTION</h2>
          <p className=" text-[1.0rem]">
            Subscribe your Email address for latest news & updates.
          </p>
          <div className="mt-2">
            <input
              type="text"
              className="px-12 py-3 bg-[#ececec] outline-none w-full placeholder:text-sm placeholder:font-medium"
              placeholder="Enter Email Address"
            />
          </div>
          <button className="bg-pmColor text-white text-md font-medium py-4 rounded-sm ">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
