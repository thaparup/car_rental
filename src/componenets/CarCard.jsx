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
    <div className="grid grid-cols-3 mx-36 gap-8">
      <div className="border-[1px] border-[#d5d5d5] flex flex-col rounded-lg">
        <div className="w-full h-auto ">
          <img
            src={CarImg1}
            alt="car_img"
            className="w-full h-[20rem] rounded-lg"
          />
          <div className="px-6 py-8 flex-col text-pmBlack">
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-left gap-2">
                <p className="text-2xl font-bold">Audi A1</p>
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
                <h4 className="text-[1.6rem] font-bold">$45</h4>
                <p className="text-[1rem]">per day</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 pb-8 CardCarSpan ">
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex">
                <IconCar /> &nbsp; Audi
              </span>

              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end">
                4/5 &nbsp; <IconCar />
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] text-left flex">
                <IconCar /> &nbsp; Manual
              </span>
              <span className="text-[1.1rem] font-medium text-[#777777] flex justify-end">
                Diesel &nbsp; <IconCar />
              </span>
            </div>

            <a
              href="#home"
              className="flex py-6 mt-6 bg-pmColor rounded-sm font-bold text-white shadow-boxShadowRed transitons-shadow duration-300 hover:shadow-boxShadowRedHover"
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className="mx-auto text-xl font-extrabold ">Book Ride</p>
            </a>
          </div>
        </div>
      </div>

      <div className="models-div__box">
        <div className="models-div__box__img">
          <img src={CarImg2} alt="car_img" />
          <div className="models-div__box__descr">
            <div className="models-div__box__descr__name-price">
              <div className="models-div__box__descr__name-price__name">
                <p>Golf 6</p>
                {/* <span>
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                </span> */}
              </div>
              <div className="models-div__box__descr__name-price__price">
                <h4>$37</h4>
                <p>per day</p>
              </div>
            </div>
            <div className="models-div__box__descr__name-price__details">
              <span>&nbsp; VW</span>
              <span style={{ textAlign: "right" }}>4/5 &nbsp;</span>
              <span>&nbsp; Manual</span>
              <span style={{ textAlign: "right" }}>Diesel &nbsp;</span>
            </div>
            <div className="models-div__box__descr__name-price__btn">
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                Book Ride
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="models-div__box">
        <div className="models-div__box__img">
          <img src={CarImg3} alt="car_img" />
          <div className="models-div__box__descr">
            <div className="models-div__box__descr__name-price">
              <div className="models-div__box__descr__name-price__name">
                <p>Toyota</p>
                {/* <span>
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                </span> */}
              </div>
              <div className="models-div__box__descr__name-price__price">
                <h4>$30</h4>
                <p>per day</p>
              </div>
            </div>
            <div className="models-div__box__descr__name-price__details">
              <span>&nbsp; Camry</span>
              <span style={{ textAlign: "right" }}>4/5 &nbsp;</span>
              <span>&nbsp; Manual</span>
              <span style={{ textAlign: "right" }}>Diesel &nbsp;</span>
            </div>
            <div className="models-div__box__descr__name-price__btn">
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                Book Ride
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="models-div__box">
        <div className="models-div__box__img">
          <img src={CarImg4} alt="car_img" />
          <div className="models-div__box__descr">
            <div className="models-div__box__descr__name-price">
              <div className="models-div__box__descr__name-price__name">
                <p>BMW 320</p>
                {/* <span>
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                </span> */}
              </div>
              <div className="models-div__box__descr__name-price__price">
                <h4>$35</h4>
                <p>per day</p>
              </div>
            </div>
            <div className="models-div__box__descr__name-price__details">
              <span>&nbsp; ModernLine</span>
              <span style={{ textAlign: "right" }}>4/5 &nbsp;</span>
              <span>&nbsp; Manual</span>
              <span style={{ textAlign: "right" }}>Diesel &nbsp;</span>
            </div>
            <div className="models-div__box__descr__name-price__btn">
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                Book Ride
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="models-div__box">
        <div className="models-div__box__img">
          <img src={CarImg5} alt="car_img" />
          <div className="models-div__box__descr">
            <div className="models-div__box__descr__name-price">
              <div className="models-div__box__descr__name-price__name">
                <p>Mercedes</p>
                {/* <span>
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                </span> */}
              </div>
              <div className="models-div__box__descr__name-price__price">
                <h4>$50</h4>
                <p>per day</p>
              </div>
            </div>
            <div className="models-div__box__descr__name-price__details">
              <span>&nbsp; Benz GLK</span>
              <span style={{ textAlign: "right" }}>4/5 &nbsp;</span>
              <span>&nbsp; Manual</span>
              <span style={{ textAlign: "right" }}>Diesel &nbsp;</span>
            </div>
            <div className="models-div__box__descr__name-price__btn">
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                Book Ride
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="models-div__box">
        <div className="models-div__box__img">
          <img src={CarImg6} alt="car_img" />
          <div className="models-div__box__descr">
            <div className="models-div__box__descr__name-price">
              <div className="models-div__box__descr__name-price__name">
                <p>VW Passat</p>
                {/* <span>
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                  <IconStar width={15} height={15} />
                </span> */}
              </div>
              <div className="models-div__box__descr__name-price__price">
                <h4>$25</h4>
                <p>per day</p>
              </div>
            </div>
            <div className="models-div__box__descr__name-price__details">
              <span>&nbsp; CC</span>
              <span style={{ textAlign: "right" }}>4/5 &nbsp;</span>
              <span>&nbsp; Manual</span>
              <span style={{ textAlign: "right" }}>Diesel &nbsp;</span>
            </div>
            <div className="models-div__box__descr__name-price__btn">
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                Book Ride
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
