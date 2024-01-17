import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function Accrodion({
  questions,
  answers,
  accordion,
  setAccordion,
}) {
  return (
    <div className="shadow-boxShadow ">
      <div
        className="cursor-pointer flex flex-col border-b-[1px] border-slate-100"
        onClick={() => setAccordion((prev) => !prev)}
      >
        <div
          className={`flex justify-between px-8 py-4 min-w-[45rem] ${
            accordion ? "text-white bg-pmColor" : "text-black bg-white"
          }`}
        >
          <p className="font-medium text-[1.07rem] font-poppins">{questions}</p>

          <FaChevronDown
            size={24}
            className={` transition-all duration-500 ease-in-out ${
              accordion ? "rotate-180 text-white" : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`transition-all duration-700 ease-in-out px-8 py-0 ${
            accordion
              ? "max-h-[400px] overflow-hidden"
              : "max-h-0 overflow-hidden"
          }`}
        >
          <p className="py-6">{answers}</p>
        </div>
      </div>
    </div>
  );
}
