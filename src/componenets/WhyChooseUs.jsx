import React from "react";
import banner from "../assets/chooseUs/main.png";
import { IconChevronsRight } from "@tabler/icons";
import Box1 from "../assets/chooseUs/icon1.png";
import Box2 from "../assets/chooseUs/icon2.png";
import Box3 from "../assets/chooseUs/icon3.png";

export default function WhyChooseUs() {
  return (
    <section className="bg-[url('/src/assets/chooseUs/bg.png')] bg-cover bg-no-repeat bgPosition">
      -
      <div className="py-24">
        <img src={banner} alt="" className="mx-auto w-[76%]" />
      </div>
      <div className="flex px-[13rem] gap-32">
        <div className="w-[50%] flex flex-col gap-3">
          <h4 className="text-xl font-bold font-poppins">Why Choose Us</h4>
          <h2 className="text-[2.55rem] font-bold font-poppins leading-none ">
            Best valued deals you will ever find
          </h2>
          <p className="text-gray-700 pt-3">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <a
            href="#home"
            className="flex w-fit py-4 px-8 mt-6 bg-pmColor rounded-sm font-bold text-white shadow-boxShadowRed transitons-shadow duration-300 hover:shadow-boxShadowRedHover"
          >
            Find Details &nbsp;&nbsp;
            <IconChevronsRight />
          </a>
        </div>
        <div className="w-[50%] flex flex-col gap-9">
          <div className="flex gap-3">
            <img src={Box1} alt="car-img" />
            <div className="text-container__right__box__text">
              <h4 className="text-2xl font-bold">Cross Country Drive</h4>
              <p className="text-gray-700">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            {" "}
            <img src={Box2} alt="coin-img" />
            <div className="text-container__right__box__text">
              <h4 className="text-2xl font-bold">All Inclusive Pricing</h4>
              <p className="text-gray-700">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            {" "}
            <img src={Box3} alt="coin-img" />
            <div className="text-container__right__box__text">
              <h4 className="text-2xl font-bold">No Hidden Charges</h4>
              <p className="text-gray-700">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
