import React, { useEffect, useState } from "react";
import { CAR_DATA, CAR_DATA as cars } from "./CarData";

export default function VehicleModels() {
  const [activeCar, setActiveCar] = useState(null);

  const data = CAR_DATA.map((cars) => cars.map((car) => car.name));

  const onClickGetIndexOfTheCar = (name) => {
    setActiveCar(name);
    setImageLoaded(false);
  };
  const [imageLoaded, setImageLoaded] = useState(false);
  console.log(imageLoaded);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="px-[7.2rem] pb-40">
      <h2 className="text-center text-2xl font-semibold">Vehicle Models</h2>
      <h1 className="text-center text-[2.4rem] font-bold ">Our rental fleet</h1>
      <p className=" text-gray-700 text-center pt-3">
        {" "}
        Choose from a variety of our amazing vehicles to rent for your next
        <span className="block leading-none"> adventure or business trip</span>
      </p>
      {/*  Car detail */}

      <div className="flex justify-between">
        <div className="">
          {cars.map((cars) =>
            cars.map((car, index) => (
              <div className="max-w-74 min-w-74 font-poppins">
                <button
                  key={car.name}
                  onClick={() => onClickGetIndexOfTheCar(car.name)}
                  className={`${
                    activeCar === car.name
                      ? "bg-pmColor text-white text-xl font-semibold my-1 px-10 py-4 min-w-full border-none transition-colors duration-300  hover:bg-pmColor "
                      : "bg-[#e9e9e9] text-xl  text-pmBlack font-semibold my-1 px-10 py-4 min-w-full border-none transition-colors duration-300  hover:bg-pmColor active:bg-pmColor "
                  }`}
                >
                  {car.name}
                </button>
              </div>
            ))
          )}
        </div>
        <div className="bg my-auto">
          {activeCar &&
            cars.map((cars) =>
              cars.map((car) => (
                <>
                  {activeCar === car.name ? (
                    <>
                      {!imageLoaded && (
                        <div className="lds-ring ">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )}
                      <img
                        src={car.img}
                        alt="Image of a car"
                        onLoad={handleImageLoad}
                        className={`${!imageLoaded ? "hidden" : ""}`}
                      />
                    </>
                  ) : null}
                </>
              ))
            )}
        </div>
        <div>
          {activeCar &&
            cars.map((cars) =>
              cars.map((car) =>
                activeCar === car.name ? (
                  <div className="  h-full max-w-[15.8rem] min-w-[15.8rem]">
                    <div className="bg-pmColor text-white pl-8 py-[0.3rem] font-poppins flex">
                      <span className="text-[1.7rem] font-bold block">
                        ${car.price}
                      </span>
                      &nbsp; &nbsp;
                      <span className="text-[1.09rem] block self-center mt-1">
                        {" "}
                        / rent per day
                      </span>
                    </div>

                    {/* table*/}

                    <div class="grid grid-cols-2 gap-0 border-2 border-black border-t-0">
                      <div className="flex justify-between py-[0.4rem] ">
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
                        <span className="block mx-auto">AC</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.air}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-0 border-2 border-black border-t-0">
                      <div className="flex justify-between py-[0.4rem]">
                        <span className="block mx-auto">Transmission</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.transmission}</span>
                    </div>
                    <div class="grid grid-cols-2 gap-0 border-2 border-black border-t-0">
                      <div className="flex justify-between py-[0.4rem]">
                        <span className="block mx-auto">Fuel</span>{" "}
                        <span className="block self-center">|</span>
                      </div>
                      <span className="block m-auto">{car.fuel}</span>
                    </div>
                    <button className="bg-pmColor w-full py-3  text-white text-xl font-semibold font-rubik mt-2 shadow-boxShadowRedReserveNow">
                      RESERVE NOW
                    </button>
                  </div>
                ) : null
              )
            )}
        </div>
      </div>
    </section>
  );
}
