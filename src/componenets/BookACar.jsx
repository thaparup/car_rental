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
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [carImage, setCarImage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [agree, setAgree] = useState(false);
  const [bookingMessage, setBookingMessage] = useState(false);
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [zipcodeError, setZipCodeError] = useState(false);
  const [agreeError, setAgreeError] = useState(false);
  const [pickUpTimeError, setPickUpTimeError] = useState(false);
  const [dropOffTimeError, setDropOffTimeError] = useState(false);

  const handlePickUpTime = (e) => {
    setPickUpTime(e.target.value);
  };

  const handleDropOffTime = (e) => {
    setDropOffTime(e.target.value);
  };
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

  const handleDropOff = (e) => {
    setDropOff(e.target.value);
  };
  const handleModal = (e) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";

    if (
      carType === "" ||
      dropOff === "" ||
      pickUp === "" ||
      startDate === "" ||
      endDate === ""
    ) {
      setErrorMessage(true);
      document.body.style.overflow = "visible";
    } else {
      setModal(true);
      setErrorMessage(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      phone === "" ||
      age === "" ||
      email === "" ||
      address === "" ||
      city === "" ||
      zipcode === "" ||
      pickUpTime === "" ||
      dropOffTime === ""
    ) {
      setFirstNameError(firstName === "");
      setLastNameError(lastName === "");
      setPhoneError(phone === "");
      setAgeError(age === "");
      setEmailError(email === "");
      setCityError(city === "");
      setZipCodeError(zipcode === "");
      setAddressError(address === "");
      setPickUpTimeError(pickUpTime === "");
      setDropOffTimeError(dropOffTime === "");
    } else {
      setModal(false);
      setBookingMessage(true);
    }
  };

  const handleBookingMessage = () => {
    setBookingMessage(false);
  };

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

        {/*............Error Message...............*/}
        {errorMessage && (
          <h5 className="bg-red-100 py-3 px-3 text-[1rem] font-medium text-[#721C24] rouneded-md">
            All fileds required!
          </h5>
        )}

        {/*...........................Booking Messgage................................ */}
        {bookingMessage && (
          <div className="flex justify-between items-center text-[#2a6817] bg-[#c3fabe] rounded-md mt-4">
            <p className=" py-3 px-4 font-medium">
              Check your email to confirm an order.
            </p>
            <FaTimes
              size={20}
              className="mr-4"
              onClick={handleBookingMessage}
            />
          </div>
        )}

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
              className="border-[1px] border-formBorderColor  pl-6 w-full text-[0.9rem] py-2 text-formColor mt-3 col-span-1 outline-none focus:outline-none "
              aria-placeholder="sfkjsdfkl"
              onChange={(e) => handlePickup(e)}
              value={pickUp}
            >
              <option value="">Select pick up location</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Butwal">Butwal</option>
              <option value="Humla">Humla</option>
              <option value="Sikhim">Sikhim</option>
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
              className="border-[1px] border-formBorderColor p pl-6 w-full text-[0.9rem] py-2 text-formColor mt-3 outline-none focus:outline-none"
              aria-placeholder="sfkjsdfkl"
              onChange={(e) => handleDropOff(e)}
              value={dropOff}
            >
              <option value="">Select pick up location</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Butwal">Butwal</option>
              <option value="Humla">Humla</option>
              <option value="Sikhim">Sikhim</option>
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
              className="border-[1px] border-formBorderColor  pl-6  text-[0.9rem] py-2 text-formColor mt-3 box-form__car-time w-full outline-none focus:outline-none"
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
              className="border-[1px] border-formBorderColor  pl-6  text-[0.9rem] py-2 text-formColor mt-3 box-form__car-time w-full outline-none focus:outline-none"
              onChange={(e) => handleEndDate(e)}
            />
          </div>
          <div className="w-full  bg-yellow-400 self-end mb-1">
            <button
              className="bg-pmColor w-full px-24 py-[0.6rem] font-bold text-white shadow-boxShadowRed hover: shadow-backShadowRedHover"
              onClick={(e) => handleModal(e)}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ......................Modal...................................*/}

      {modal && (
        <div className="bg-neutral-700/70 fixed flex justify-center left-0 top-0 z-[700] overflow-y-auto h-full w-full ">
          <div className="overflow-scroll">
            <div className="mt-1 ">
              <div className="flex justify-between bg-pmColor items-center  ">
                <h3 className=" p-4 text-white font-bold text-[1.4rem] leading-none">
                  COMPLETE RESERVATION
                </h3>
                <FaTimes
                  size={30}
                  className="text-white pr-2 mb-2 mr-2"
                  onClick={() => {
                    setModal(false);
                    document.body.style.overflow = "visible";
                  }}
                />
              </div>

              <div className="bg-[#ffeae6]  ">
                <div className="flex gap-2 text-pmColor px-8 py-5">
                  <FaCircleInfo size={20} className="translate-y-[2px]" />{" "}
                  <span className="text-lg font-bold">
                    {" "}
                    Upon completing this reservation enquiry, you will receive:
                  </span>
                </div>
                <p className="text-[#777777] font-medium px-6 pb-6  text-[1.1rem] max-w-[92%]">
                  Your rental voucher to produce on arrival at the rental desk
                  and a toll-free customer support number.
                </p>
              </div>
            </div>

            <div className="flex justify-between p-8 bg-white">
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
                    <div className="flex gap-2 items-center mt-2">
                      {" "}
                      <span className="text-[#777777]">{startDate}</span>{" "}
                      <div className="flex flex-col gap-1">
                        <input
                          type="time"
                          className="border-black border-[1px] px-6"
                          value={pickUpTime}
                          onChange={(e) => {
                            handlePickUpTime(e);
                            setPickUpTimeError(false);
                          }}
                        />
                        {pickUpTimeError && (
                          <span className="text-[0.7rem] text-pmColor font-medium">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FaLocationDot size={24} />
                  <div className="flex flex-col">
                    <span className="text-[1rem] font-semibold">
                      Drop-off Date & Time
                    </span>
                    <div className="flex gap-2 items-center mt-2">
                      {" "}
                      <span className="text-[#777777]">{endDate}</span>{" "}
                      <div className="flex flex-col gap-1">
                        <input
                          type="time"
                          className="border-black border-[1px] px-6"
                          value={dropOffTime}
                          onChange={(e) => {
                            handleDropOffTime(e);
                            setDropOffTimeError(false);
                          }}
                        />
                        {dropOffTimeError && (
                          <span className="text-[0.7rem] text-pmColor font-medium">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
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
                    <span className="text-[#777777]">{dropOff}</span>
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

                {carImage && (
                  <img
                    src={carImage}
                    alt="car image"
                    className="mt-5 h-[15em] w-full"
                  />
                )}
              </div>
            </div>

            <hr />

            {/* ...................Personal Infromation........................................... */}
            <div className="p-8 bg-white">
              <h3 className="text-md text-pmColor font-bold font-poppins">
                PERSONAL INFORMATION
              </h3>
              <form action="">
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div>
                    <span className="text-[#777777] font-semibold ">
                      First Name <span className="text-pmColor">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your first Name"
                      className="w-full mt-2 p-3 bg-[#dbdbdb] placeholder:text-[#777777]  placeholder:text-sm outline-none focus:outline-none"
                      value={firstName}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFirstName(value);
                        setFirstNameError(value === "");
                      }}
                    />

                    {firstNameError && (
                      <span className="text-[0.7rem] text-pmColor font-medium">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-[#777777] font-semibold ">
                      Last Name <span className="text-pmColor">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      className="w-full mt-2 p-3 bg-[#dbdbdb] placeholder:text-[#777777]  placeholder:text-sm outline-none focus:outline-none"
                      value={lastName}
                      onChange={(e) => {
                        const value = e.target.value;
                        setLastName(value);
                        setLastNameError(value === "");
                      }}
                    />
                    {lastNameError && (
                      <span className="text-[0.7rem] text-pmColor font-medium">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                {/*................... Phone and Age.......................*/}
                <div className="grid grid-cols-2 gap-8 mt-5">
                  <div>
                    <span className="text-[#777777] font-semibold ">
                      Phone Number <span className="text-pmColor">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="w-full mt-2 p-3 bg-[#dbdbdb] placeholder:text-[#777777]  placeholder:text-sm outline-none focus:outline-none"
                      value={phone}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPhone(value);
                        setPhoneError(value === "");
                      }}
                    />
                    {phoneError && (
                      <span className="text-[0.7rem] text-pmColor font-medium">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-[#777777] font-semibold ">
                      Age<span className="text-pmColor">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="18"
                      className="w-full mt-2 p-3 bg-[#dbdbdb] placeholder:text-[#777777] placeholder:text-sm outline-none focus:outline-none"
                      value={age}
                      onChange={(e) => {
                        const value = e.target.value;
                        setAge(value);
                        setAgeError(value === "");
                      }}
                    />
                    {ageError && (
                      <span className="text-[0.7rem] text-pmColor font-medium">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                {/* ....    Email .................... */}
                <div className="mt-5">
                  <span className="text-[#777777] font-semibold ">
                    Email <span className="text-pmColor">*</span>
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="w-full mt-2 p-3 bg-[#dbdbdb] placeholder:text-[#777777] placeholder:text-sm outline-none focus:outline-none"
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setEmail(value);
                      setEmailError(value === "");
                    }}
                  />
                  {emailError && (
                    <span className="text-[0.7rem] text-pmColor font-medium">
                      This field is required
                    </span>
                  )}
                </div>
                {/*............... Address...........................*/}
                <div className="mt-5">
                  <span className="text-[#777777] font-semibold ">
                    Address <span className="text-pmColor">*</span>
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your street address"
                    className="w-full mt-2 p-3 bg-[#dbdbdb] placeholder:text-[#777777]  placeholder:text-sm outline-none focus:outline-none"
                    value={address}
                    onChange={(e) => {
                      const value = e.target.value;
                      setAddress(value);
                      setAddressError(value === "");
                    }}
                  />
                  {addressError && (
                    <span className="text-[0.7rem] text-pmColor font-medium">
                      This field is required
                    </span>
                  )}
                </div>
                {/*................City And Zip Code....................... */}
                <div className="grid grid-cols-2 gap-8 mt-5">
                  <div>
                    <span className="text-[#777777] font-semibold ">
                      City <span className="text-pmColor">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      className="w-full mt-2 p-3 bg-[#dbdbdb] placeholder:text-[#777777]  placeholder:text-sm outline-none focus:outline-none"
                      value={city}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCity(value);
                        setCityError(value === "");
                      }}
                    />
                    {cityError && (
                      <span className="text-[0.7rem] text-pmColor font-medium">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-[#777777] font-semibold ">
                      Zip Code<span className="text-pmColor">*</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your zip code"
                      className="w-full mt-2 p-3 bg-[#dbdbdb] placeholder:text-[#777777]  placeholder:text-sm outline-none focus:outline-none"
                      value={zipcode}
                      onChange={(e) => {
                        const value = e.target.value;
                        setZipCode(value);
                        setZipCodeError(value === "");
                      }}
                    />
                    {zipcodeError && (
                      <span className="text-[0.7rem] text-pmColor font-medium">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                {/* ................... Check Box.................................. */}

                <div className="mt-5 flex justify-start items-center pb-8">
                  <input
                    type="checkbox"
                    className=" w-4 h-4"
                    value={agree}
                    onChange={(e) => setAgree(e.target.value)}
                  />{" "}
                  <span className="ml-2 font-light">
                    {" "}
                    Accept to receive news and updates
                  </span>
                </div>

                {/*..............................Reserve Button................*/}

                <div className="bg-[#dbdbdb] py-10 flex justify-end">
                  <button
                    className="bg-pmColor text-white py-3 px-8 mr-4 font-bold text-xl hover:shadow-boxShadowRed"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Reserve Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
