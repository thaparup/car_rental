import React, { useState } from "react";
import { CAR_DATA, CAR_DATA as cars } from "./CarData";

export default function VehicleModels() {
  const [activeCar, setActiveCar] = useState(null);
  console.log(activeCar);

  const data = CAR_DATA.map((cars) => cars.map((car) => car.name));

  const onClickGetIndexOfTheCar = (name) => {
    setActiveCar(name);
  };

  return (
    <section className="px-[7.2rem]">
      <h2 className="text-center text-2xl font-semibold">Vehicle Models</h2>
      <h1 className="text-center text-[2.4rem] font-bold ">Our rental fleet</h1>
      <p className=" text-gray-700 text-center pt-3">
        {" "}
        Choose from a variety of our amazing vehicles to rent for your next
        <span className="block leading-none"> adventure or business trip</span>
      </p>
      {/*  Car detail */}
      <div className="relative ">
        {cars.map((cars) =>
          cars.map((car, index) => (
            <div className=" flex justify-between ">
              <div className="max-w-72 min-w-72">
                <button
                  key={car.name}
                  onClick={() => onClickGetIndexOfTheCar(car.name)}
                  //   className="bg-[#e9e9e9] text-xl font-semibold my-1 px-10 py-4 min-w-full border-none transition-colors duration-300  hover:bg-pmColor active:bg-pmColor "
                  className={`${
                    activeCar === car.name
                      ? "bg-pmColor text-white text-xl font-semibold my-1 px-10 py-4 min-w-full border-none transition-colors duration-300  hover:bg-pmColor "
                      : "bg-[#e9e9e9] text-xl font-semibold my-1 px-10 py-4 min-w-full border-none transition-colors duration-300  hover:bg-pmColor active:bg-pmColor "
                  }`}
                >
                  {car.name}
                </button>
              </div>

              {activeCar === car.name && (
                <div className=" absolute right-0 top-0 h-full">
                  <div className="">
                    <div className="bg-pmColor text-white px-8 py-[0.3rem] font-poppins flex">
                      <span className="text-[1.7rem] font-bold block">
                        ${car.price}
                      </span>
                      &nbsp; &nbsp;
                      <span className="text-[1.09rem] block self-center mt-1">
                        {" "}
                        / rent per day
                      </span>
                    </div>
                    {/* talbe*/}

                    {/* <div className="border-2 border-black">
                      <div className="flex justify-between py-2 ">
                        <span className="block w-full text-center">Model</span>|
                        <span className="block w-full text-center">
                          {car.model}
                        </span>
                      </div>
                    </div> */}

                    <div class="grid grid-cols-2 gap-0 border-2 border-black ">
                      <div className="flex justify-between py-[0.4rem]">
                        <span className="block mx-auto">Model</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.model}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-0 border-2 border-black border-t-0">
                      <div className="flex justify-between py-[0.4rem]">
                        <span className="block mx-auto">Mark</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.mark}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-0 border-2 border-black border-t-0">
                      <div className="flex justify-between py-[0.4rem]">
                        <span className="block mx-auto">Year</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.year}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-0 border-2 border-black border-t-0">
                      <div className="flex justify-between py-[0.4rem]">
                        <span className="block mx-auto">Doors</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.doors}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-0 border-2 border-black border-t-0">
                      <div className="flex justify-between py-[0.4rem]">
                        <span className="block mx-auto">Mark</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.mark}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-0 border-2 border-black border-t-0">
                      <div className="flex justify-between py-[0.4rem]">
                        <span className="block mx-auto">Mark</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.mark}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-0 border-2 border-black border-t-0">
                      <div className="flex justify-between py-[0.4rem]">
                        <span className="block mx-auto">Mark</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.mark}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-0 border-2 border-black border-t-0">
                      <div className="flex justify-between py-[0.4rem]">
                        <span className="block mx-auto">Mark</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.mark}</span>
                    </div>
                    {/* 
                    <div className="border-2 border-black border-t-0">
                      <div className="flex justify-between py-2">
                        <span className="block mx-auto">Mark</span> &nbsp;|
                        <span className="block mx-auto">{car.mark}</span>
                      </div>
                    </div>
                    <div className="border-2 border-black border-t-0">
                      <div className="flex justify-between py-2">
                        <span className="block mx-auto">Year</span>|
                        <span className="block mx-auto">{car.year}</span>
                      </div>
                    </div>
                    <div className="border-2 border-black border-t-0">
                      <div className="flex justify-between py-2">
                        <span className="block w-full text-center">Doors</span>|
                        <span className="block w-full text-center">
                          {car.doors}
                        </span>
                      </div>
                    </div>
                    <div className="border-2 border-black border-t-0">
                      <div className="flex justify-between py-2">
                        <span className="block w-full text-center">AC</span>|
                        <span className="block w-full text-center">
                          {car.air}
                        </span>
                      </div>
                    </div>
                    <div className="border-2 border-black border-t-0">
                      <div className="flex justify-between py-2">
                        <span className="block w-full text-center">
                          Transmission
                        </span>
                        |
                        <span className="block w-full text-center">
                          {car.transmission}
                        </span>
                      </div>
                    </div>
                    <div className="border-2 border-black border-t-0">
                      <div className="flex justify-between py-2">
                        <span className="block w-full text-center">Fuel</span>|
                        <span className="block w-full text-center">
                          {car.fuel}
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
        <div></div>
        {/* {CAR_DATA.map((carGroup) => (
          <button
            key={carGroup[0].name}
            onClick={() => onClickGetIndexOfTheCar(carGroup[0].name)}
          >
            {carGroup[0].name}
          </button>
        ))} */}
      </div>
      <h2>sdfsdfljk</h2>
    </section>
  );
}
