import React from "react";
import { Link } from "react-router-dom";

export default function HeroPages({ name }) {
  return (
    <section className="bg-[url('/src/assets/hero/heroes-bg.png')] bg-no-repeat relative h-[25.5rem] w-full">
      <div className="bg-bgWhite w-full h-full flex flex-col justify-center  pl-[6rem] lg:pl-[5rem] md:pl-[4rem] sm:pl-[3rem] xsm:pl-[1rem]">
        <h1 className="text-4xl font-bold">{name}</h1>
        <div className="flex mt-2">
          <Link
            to=""
            className="text-1xl font-semibold transition-colors duration-500 ease-in-out hover:text-pmColor"
          >
            Home
          </Link>
          <p className="text-1xl font-semibold">/ {name}</p>
        </div>
      </div>
    </section>
  );
}
