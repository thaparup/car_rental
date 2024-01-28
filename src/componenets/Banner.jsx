import React from "react";
import banner from "../assets/chooseUs/main.png";

export default function Banner() {
  return (
    <section>
      <div className="bg-pmBlack py-16 ">
        <h1 className="text-5xl font-poppins text-white font-bold text-center leading-snug">
          Save big with our cheap car rental!
        </h1>
        <h4 className="text-2xl font-poppins font-medium text-white text-center mt-7 leading-relaxed ">
          Top Airports. Local Suppliers.{" "}
          <span className="text-pmColor">24/7</span> Support.
        </h4>
      </div>
    </section>
  );
}
