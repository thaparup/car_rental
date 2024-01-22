import CarImg1 from "../assets/cars-big/audi-box.png";
import CarImg2 from "../assets/cars-big/golf6-box.png";
import CarImg3 from "../assets/cars-big/toyota-box.png";
import CarImg4 from "../assets/cars-big/bmw-box.png";
import CarImg5 from "../assets/cars-big/benz-box.png";
import CarImg6 from "../assets/cars-big/passat-box.png";
import { Link } from "react-router-dom";
import { IconCar, IconChevronsRight, IconStar } from "@tabler/icons";
// import { IconCar, IconPhone, IconStar } from "@tabler/icons-react";

export default function CarCard() {
  return (
    <div className="grid grid-cols-3 mx-[12.3rem] gap-8">
      <div className="border-[1px] border-[#d5d5d5] flex flex-col rounded-lg">
        <div className="w-full h-auto  ">
          <img
            src={CarImg1}
            alt="car_img"
            className="w-full  rounded-lg h-[17rem] "
          />
          <div className="px-6 pt-6 pb-5 flex-col text-pmBlack ">
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-left gap-2">
                <p className="text-2xl font-bold leading-none">Audi A1</p>
                <span className="flex gap-2">
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                </span>
              </div>
              <div className="flex flex-col text-right">
                <h4 className="text-[1.6rem] font-bold leading-none">$45</h4>
                <p className="text-[1rem]">per day</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 pb-8 CardCarSpan">
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; Audi
              </span>

              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                4/5 &nbsp; <IconCar />
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; Manual
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                Diesel &nbsp; <IconCar />
              </span>
            </div>

            <a
              href="#home"
              className="flex py-6 mt-3 bg-pmColor rounded-sm font-bold text-white shadow-boxShadowRed transitons-shadow duration-300 hover:shadow-boxShadowRedHover"
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className="mx-auto text-xl font-extrabold ">Book Ride</p>
            </a>
          </div>
        </div>
      </div>

      {/* Row 1 Column 2 */}

      <div className="border-[1px] border-[#d5d5d5] flex flex-col rounded-lg">
        <div className="w-full h-auto ">
          <img
            src={CarImg2}
            alt="car_img"
            className="w-full  rounded-lg h-[17rem]"
          />
          <div className="px-6 pt-6 pb-5 flex-col text-pmBlack ">
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-left gap-2">
                <p className="text-2xl font-bold leading-none">Golf 6</p>
                <span className="flex gap-2">
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                </span>
              </div>
              <div className="flex flex-col text-right">
                <h4 className="text-[1.6rem] font-bold leading-none">$37</h4>
                <p className="text-[1rem]">per day</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 pb-8 CardCarSpan">
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; VW
              </span>

              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                4/5 &nbsp; <IconCar />
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; Manual
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                Diesel &nbsp; <IconCar />
              </span>
            </div>

            <a
              href="#home"
              className="flex py-6 mt-3 bg-pmColor rounded-sm font-bold text-white shadow-boxShadowRed transitons-shadow duration-300 hover:shadow-boxShadowRedHover"
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className="mx-auto text-xl font-extrabold ">Book Ride</p>
            </a>
          </div>
        </div>
      </div>

      {/* Row1 Column 3 */}

      <div className="border-[1px] border-[#d5d5d5] flex flex-col rounded-lg">
        <div className="w-full h-auto ">
          <img
            src={CarImg3}
            alt="car_img"
            className="w-full  rounded-lg  h-[17rem]"
          />
          <div className="px-6 pt-6 pb-5 flex-col text-pmBlack ">
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-left gap-2">
                <p className="text-2xl font-bold leading-none">Toyota</p>
                <span className="flex gap-2">
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                </span>
              </div>
              <div className="flex flex-col text-right">
                <h4 className="text-[1.6rem] font-bold leading-none">$30</h4>
                <p className="text-[1rem]">per day</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 pb-8 CardCarSpan">
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; Camry
              </span>

              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                4/5 &nbsp; <IconCar />
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; Manual
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                Diesel &nbsp; <IconCar />
              </span>
            </div>

            <a
              href="#home"
              className="flex py-6 mt-3 bg-pmColor rounded-sm font-bold text-white shadow-boxShadowRed transitons-shadow duration-300 hover:shadow-boxShadowRedHover"
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className="mx-auto text-xl font-extrabold ">Book Ride</p>
            </a>
          </div>
        </div>
      </div>

      {/* Row 2 Coulumn1 */}

      <div className="border-[1px] border-[#d5d5d5] flex flex-col rounded-lg">
        <div className="w-full h-auto ">
          <img
            src={CarImg4}
            alt="car_img"
            className="w-full  rounded-lg   min-h-[17rem] object-fill"
          />
          <div className="px-6 pt-6 pb-5 flex-col text-pmBlack ">
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-left gap-2">
                <p className="text-2xl font-bold leading-none">BMW 320</p>
                <span className="flex gap-2">
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                </span>
              </div>
              <div className="flex flex-col text-right">
                <h4 className="text-[1.6rem] font-bold leading-none">$45</h4>
                <p className="text-[1rem]">per day</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 pb-8 CardCarSpan">
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; ModernLine
              </span>

              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                4/5 &nbsp; <IconCar />
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; Manual
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                Diesel &nbsp; <IconCar />
              </span>
            </div>

            <a
              href="#home"
              className="flex py-6 mt-3 bg-pmColor rounded-sm font-bold text-white shadow-boxShadowRed transitons-shadow duration-300 hover:shadow-boxShadowRedHover"
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className="mx-auto text-xl font-extrabold ">Book Ride</p>
            </a>
          </div>
        </div>
      </div>
      {/* Row 2 Column 2 */}

      <div className="border-[1px] border-[#d5d5d5] flex flex-col rounded-lg">
        <div className="w-full h-auto ">
          <img
            src={CarImg5}
            alt="car_img"
            className="w-full  rounded-lg   min-h-[17rem] object-fill"
          />
          <div className="px-6 pt-6 pb-5 flex-col text-pmBlack ">
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-left gap-2">
                <p className="text-2xl font-bold leading-none">Mercedes</p>
                <span className="flex gap-2">
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                </span>
              </div>
              <div className="flex flex-col text-right">
                <h4 className="text-[1.6rem] font-bold leading-none">$85</h4>
                <p className="text-[1rem]">per day</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 pb-8 CardCarSpan">
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; Benz GLK
              </span>

              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                4/5 &nbsp; <IconCar />
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; Manual
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                Diesel &nbsp; <IconCar />
              </span>
            </div>

            <a
              href="#home"
              className="flex py-6 mt-3 bg-pmColor rounded-sm font-bold text-white shadow-boxShadowRed transitons-shadow duration-300 hover:shadow-boxShadowRedHover"
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className="mx-auto text-xl font-extrabold ">Book Ride</p>
            </a>
          </div>
        </div>
      </div>
      {/* Row 2 Column 3 */}

      <div className="border-[1px] border-[#d5d5d5] flex flex-col rounded-lg">
        <div className="w-full h-auto ">
          <img
            src={CarImg6}
            alt="car_img"
            className="w-full  rounded-lg  min-h-[17rem] object-fill"
          />
          <div className="px-6 pt-6 pb-5 flex-col text-pmBlack ">
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-left gap-2">
                <p className="text-2xl font-bold leading-none">VW Passat</p>
                <span className="flex gap-2">
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                  <IconStar
                    width={15}
                    height={15}
                    className=" text-[#ffc933]"
                  />
                </span>
              </div>
              <div className="flex flex-col text-right">
                <h4 className="text-[1.6rem] font-bold leading-none">$25</h4>
                <p className="text-[1rem]">per day</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 pb-8 CardCarSpan">
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; CC
              </span>

              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                4/5 &nbsp; <IconCar />
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex leading-none">
                <IconCar /> &nbsp; Manual
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end leading-none">
                Diesel &nbsp; <IconCar />
              </span>
            </div>

            <a
              href="#home"
              className="flex py-6 mt-3 bg-pmColor rounded-sm font-bold text-white shadow-boxShadowRed transitons-shadow duration-300 hover:shadow-boxShadowRedHover"
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className="mx-auto text-xl font-extrabold ">Book Ride</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
