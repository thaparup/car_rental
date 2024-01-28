import React from "react";

export default function HeroPages({ name }) {
  return (
    <section className="bg-[url('/src/assets/hero/heroes-bg.png')]  bg-no-repeat relative h-[28rem] w-full">
      <div className="bg-bgWhite w-full h-full flex flex-col justify-center pl-[8rem]">
        <h1>HOme</h1>
        <h2>sdfhom</h2>
      </div>
      <div className="">
        <h1>{name}</h1>
        <h5>
          <a href=" ">Home</a>
          <a href="">Models</a>
        </h5>
      </div>
      <div className="">
        <h1>sdfsklfkjl</h1>
        <h1>sdfsklfkjl</h1>
        <h1>sdfsklfkjl</h1>
        <h1>sdfsklfkjl</h1>
        <h1>sdfsklfkjl</h1>
      </div>
    </section>
  );
}
