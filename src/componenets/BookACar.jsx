import React from "react";
import { FaShuttleVan } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";

export default function BookACar() {
  return (
    <section className="border-2 border-white relative mx-[7.2rem] my-8 bg-white rounded-md shadow-boxShadow bg-[url('/src/assets/book-car/book-bg.png')]">
      <div className="px-12 py-12">
        <h3 className="text-2xl font-bold font-poppins">Book a car</h3>
        <div className="pt-6 grid grid-cols-3 gap-4">
          <div>
            <div className="flex gap-2">
              <FaShuttleVan size={24} />
              <label htmlFor="" className="font-semibold">
                Select Your Car Type{" "}
                <span className="text-pmColor font-bold">*</span>
              </label>
            </div>
            <select
              name="language"
              id="language"
              className="border-[1px] border-formBorderColor px-24 py-2 text-formColor mt-3"
              aria-placeholder="sfkjsdfkl"
            >
              <option>Select your car type</option>
              <option value="Audi A1 S-Line">Audi A1 S-Line</option>
              <option value="VW Golf 6">VW Golf 6</option>
              <option value="Toyota Camry">Toyota Camry</option>
              <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
              <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
              <option value="VW Passat CC">VW Passat CC</option>
            </select>
          </div>
          <div className="">
            <div className="flex gap-2">
              <FaLocationDot size={24} />
              <label htmlFor="" className="font-semibold">
                Pick-up <span className="text-pmColor font-bold">*</span>
              </label>
            </div>
            <select
              name="language"
              id="language"
              className="border-[1px] border-formBorderColor px-24 py-2 text-formColor mt-3 col-span-1 w-full"
              aria-placeholder="sfkjsdfkl"
            >
              <option>Pick-up</option>
              <option>Belgrade</option>
              <option>Novi Sad</option>
              <option>Nis</option>
              <option>Kragujevac</option>
              <option>Subotica</option>
            </select>
          </div>
          <div>
            <div className="flex gap-2">
              <FaLocationDot size={24} />
              <label htmlFor="" className="font-semibold">
                Drop-of <span className="text-pmColor font-bold">*</span>
              </label>
            </div>
            <select
              name="language"
              id="language"
              className="border-[1px] border-formBorderColor px-24 py-2 text-formColor mt-3"
              aria-placeholder="sfkjsdfkl"
            >
              <option>Select drop off location</option>
              <option>Novi Sad</option>
              <option>Belgrade</option>
              <option>Nis</option>
              <option>Kragujevac</option>
              <option>Subotica</option>
            </select>
          </div>
        </div>

        {/*  second one */}
        <div className="pt-5 grid grid-cols-3 gap-4 pb-6">
          <div className="">
            <div className="flex gap-2">
              <CiCalendarDate size={24} className="" />
              <label htmlFor="" className="font-semibold">
                Pick-up
                <span className="text-pmColor font-bold">*</span>
              </label>
            </div>
            <input
              type="date"
              className="border-[1px] border-formBorderColor px-24 py-2 text-formColor mt-3 box-form__car-time w-full"
            />
          </div>
          <div className="">
            <div className="flex gap-2">
              <FaLocationDot size={24} />
              <label htmlFor="" className="font-semibold">
                Drop-of <span className="text-pmColor font-bold">*</span>
              </label>
            </div>
            <input
              type="date"
              className="border-[1px] border-formBorderColor px-24 py-2 text-formColor mt-3 box-form__car-time w-full"
            />
          </div>
          <div className="w-full  bg-yellow-400 self-end mb-1">
            <button className="bg-pmColor w-full px-24 py-[0.6rem] font-bold text-white shadow-boxShadowRed hover: shadow-backShadowRedHover">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
