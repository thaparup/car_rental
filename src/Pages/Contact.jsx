import {
  IconLocation,
  IconMail,
  IconMailOpened,
  IconPhone,
} from "@tabler/icons";
import React from "react";
import HeroPages from "../componenets/HeroPages";
import { Link } from "react-router-dom";
import BottomBanner from "../componenets/BottomBanner";
import Footer from "../componenets/Footer";

export default function Contact() {
  return (
    <section>
      <HeroPages name="Contact" />
      <div className="bg-[url('src/assets/banners/bg-contact.png')] bg-no-repeat bg-center py-28 mb-12 ">
        <div className=" flex justify-evenly md:flex-wrap sm:flex-wrap xsm:flex-wrap ">
          <div className="w-[29rem] flex flex-col">
            <h2 className="text-[2.6rem] font-bold font-poppins leading-none md:text-center sm:text-center xsm:text-center">
              Need additional information?
            </h2>
            <p className="text-gray-700 text-[1rem] py-10 md:text-center sm:text-center xsm:text-center">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <a
              href="/"
              className="flex gap-1 hover:text-pmColor transition-colors duration-500 ease-in-out text-pmBlack font-semibold py-4 md:self-center sm:self-center xsm:self-center"
            >
              <IconPhone /> &nbsp;
              <span className="text-[1.1rem]"> (123) 456-7869</span>
            </a>
            <a
              href="/"
              className="flex  gap-1 hover:text-pmColor transition-colors duration-500 ease-in-out text-pmBlack font-semibold py-4 md:self-center sm:self-center xsm:self-center"
            >
              <IconMail /> &nbsp;{" "}
              <span className="text-[1.1rem]">carrental@carmail.com</span>
            </a>
            <a
              href="/"
              className="flex  gap-1 hover:text-pmColor transition-colors duration-500 ease-in-out text-pmBlack font-semibold py-4 md:self-center sm:self-center xsm:self-center"
            >
              <IconLocation />
              &nbsp; <span className="text-[1.1rem]">Belgrade, Serbia</span>
            </a>
          </div>
          <div className="w-[36rem] md:mt-12 sm:mt-12 xsm:mt-12 ">
            <label
              htmlFor=""
              className="block text-md font-semibold font-poppins py-2 md:text-center sm:text-center xsm:text-center"
            >
              Full Name <b className="text-pmColor">*</b>
            </label>
            <input
              type="text"
              className="bg-[#f2f2f2] py-4 w-full px-8 placeholder:text-pmGray outline-none xsm:mx-2"
              placeholder={` E.g: "John Doe"`}
            />
            <label
              htmlFor=""
              className="block text-md font-semibold font-poppins py-2 pt-4 md:text-center sm:text-center xsm:text-center"
            >
              Email <b className="text-pmColor">*</b>
            </label>
            <input
              type="text"
              className="bg-[#f2f2f2] py-4 w-full px-8 placeholder:text-pmGray outline-none xsm:mx-2"
              placeholder={`youremail@example.com`}
            />
            <label
              htmlFor=""
              className="block text-md font-semibold font-poppins py-2 pt-4 md:text-center sm:text-center xsm:text-center"
            >
              Tell us about it<b className="text-pmColor">*</b>
            </label>
            <textarea
              name=""
              placeholder="Write here."
              id=""
              cols="30"
              rows="10"
              className="bg-[#f2f2f2] placeholder:font-rubik py-6 px-6 outline-none w-full h-40 xsm:mx-2"
            ></textarea>

            <Link
              to=""
              className="flex bg-pmColor px-8 py-4 mt-4 rounded-sm font-bold text-white shadow-boxShadowRed transitons-shadow duration-300 hover:shadow-boxShadowRedHover xsm:mx-2"
            >
              <div className="flex gap-2 mt-1 mx-auto">
                <IconMailOpened />

                <p className="text-center">Send Message</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <BottomBanner />
      <Footer />
    </section>
  );
}
