import React, { useState, useEffect } from "react";
import { FaShuttleVan } from "react-icons/fa";
import { FaCircleInfo, FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import CarAudi from "../assets/cars-big/audia1.jpg";
import CarGolf from "../assets/cars-big/golf6.jpg";
import CarToyota from "../assets/cars-big/toyotacamry.jpg";
import CarBmw from "../assets/cars-big/bmw320.jpg";
import CarMercedes from "../assets/cars-big/benz.jpg";
import CarPassat from "../assets/cars-big/passatcc.jpg";

export default function BookACar() {
  const [modal, setModal] = useState(false);
  const [carType, setCarType] = useState(null);
  const [pickUp, setPickUp] = useState(null);
  const [dropOf, setDropOf] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [carImage, setCarImage] = useState(null);

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const handleCarType = (e) => {
    setCarType(e.target.value);
  };

  const handlePickup = (e) => {
    setPickUp(e.target.value);
  };
  const handleDropOf = (e) => {
    setDropOf(e.target.value);
  };
  const handleModal = () => {
    setModal(true);
  };
  console.log(dropOf);
  useEffect(() => {
    if (carType === "Audi A1 S-Line") setCarImage(CarAudi);
    else if (carType === "VW Golf 6") setCarImage(CarGolf);
    else if (carType === "Toyota Camry") setCarImage(CarToyota);
    else if (carType === "BMW 320 ModernLine") setCarImage(CarBmw);
    else if (carType === "Mercedes-Benz GLK") setCarImage(CarMercedes);
    else if (carType === "VW Passat CC") setCarImage(CarPassat);
  }, [carType]);
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
              className="border-[1px] border-formBorderColor py-2  pl-6 w-full text-[0.9rem] font-medium text-formColor mt-3 outline-none "
              aria-placeholder="sfkjsdfkl"
              onChange={(e) => handleCarType(e)}
              value={carType}
            >
              <option value="">Select your car type</option>
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
              className="border-[1px] border-formBorderColor  pl-6 w-full text-[0.9rem] py-2 text-formColor mt-3 col-span-1 "
              aria-placeholder="sfkjsdfkl"
              onChange={(e) => handlePickup(e)}
            >
              <option value="">Select pick up location</option>
              <option value="Belgrade">Belgrade</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Nis">Nis</option>
              <option value="Kragujevac">Kragujevac</option>
              <option value="Subotica">Subotica</option>
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
              className="border-[1px] border-formBorderColor p pl-6 w-full text-[0.9rem] py-2 text-formColor mt-3"
              aria-placeholder="sfkjsdfkl"
              onChange={(e) => handleDropOf(e)}
            >
              <option value="">Select pick up location</option>
              <option value="Belgrade">Belgrade</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Nis">Nis</option>
              <option value="Kragujevac">Kragujevac</option>
              <option value="Subotica">Subotica</option>
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
              className="border-[1px] border-formBorderColor  pl-6  text-[0.9rem] py-2 text-formColor mt-3 box-form__car-time w-full"
              onChange={(e) => handleStartDate(e)}
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
              className="border-[1px] border-formBorderColor  pl-6  text-[0.9rem] py-2 text-formColor mt-3 box-form__car-time w-full"
              onChange={(e) => handleEndDate(e)}
            />
          </div>
          <div className="w-full  bg-yellow-400 self-end mb-1">
            <button
              className="bg-pmColor w-full px-24 py-[0.6rem] font-bold text-white shadow-boxShadowRed hover: shadow-backShadowRedHover"
              onClick={handleModal}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ......................Modal...................................*/}

      {modal && (
        <div className="  bg-red-50 h-screen fixed left-0 top-0 z-[700] translate-x-[40%] translate-y-[5%]">
          <div className="">
            <div>
              <div className="flex justify-between bg-pmColor items-center ">
                <h3 className=" p-4 text-white font-semibold text-[1.3rem] leading-none">
                  COMPLETE RESERVATION
                </h3>
                <FaTimes
                  size={30}
                  className="text-white pr-2 mb-2"
                  onClick={() => setModal(false)}
                />
              </div>

              <div className="bg-[#ffeae6]  ">
                <div className="flex gap-2 text-pmColor p-5">
                  <FaCircleInfo size={20} className="translate-y-[2px]" />{" "}
                  <span className="text-lg font-bold">
                    {" "}
                    Upon completing this reservation enquiry, you will receive:
                  </span>
                </div>
                <p className="text-[#777777] font-medium px-6 pb-6  text-[1.1rem] text">
                  Your rental voucher to produce on arrival at the rental desk
                  and a toll-free customer support number.
                </p>
              </div>
            </div>

            <div className="flex justify-between p-8">
              <div className="flex flex-col gap-8">
                <h4 className="text-pmColor text-[1.1rem] font-semibold">
                  Location & Date
                </h4>
                <div className="flex gap-2">
                  <FaLocationDot size={24} />
                  <div className="flex flex-col">
                    <span className="text-[1rem] font-semibold">
                      Pick-Up Date & Time
                    </span>
                    <span className="text-[#777777]">{startDate}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FaLocationDot size={24} />
                  <div className="flex flex-col">
                    <span className="text-[1rem] font-semibold">
                      Drop-off Date & Time
                    </span>
                    <span className="text-[#777777]">{endDate}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FaLocationDot size={24} />
                  <div className="flex flex-col">
                    <span className="text-[1rem] font-semibold">
                      Pick-Up Location
                    </span>
                    <span className="text-[#777777]">{pickUp}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FaLocationDot size={24} />
                  <div className="flex flex-col">
                    <span className="text-[1rem] font-semibold">
                      Drop-Off Location
                    </span>
                    <span className="text-[#777777]">{dropOf}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4>
                  {" "}
                  <span className="text-[1rem] font-bold">
                    Car-{" "}
                    <span className="text-[1rem] font-bold text-pmColor">
                      {carType}
                    </span>
                  </span>
                </h4>

                {carImage && <img src={carImage} alt="car image" />}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
