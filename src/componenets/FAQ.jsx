import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Accrodion from "./Accrodion";
import { QAndAOne, QAndATwo, QAndAThree } from "./AccData";

export default function FAQ() {
  const [accordionOne, setAccordionOne] = useState(false);
  const [accordionTwo, setAccordionTwo] = useState(false);
  const [accordionThree, setAccordionThree] = useState(false);

  return (
    <section className="bg-[url('/src/assets/faq/car.png')] bg-no-repeat bg-auto bgCar">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 max-w-[45rem] mx-auto text-center">
          <h4 className="text-xl font-semibold ">FAQ</h4>
          <h2 className="text-[2.7rem] font-bold leading-none">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 leading-0 mt-5">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>

        <div className="max-w-[45rem] mx-auto bg"></div>
        {/* <Accrodion
          questions={QAndAOne.question}
          answers={QAndAOne.answer}
          accordion={accordionOne}
          setAccordion={setAccordionOne}
        /> */}

        <div className="max-w-[45rem] mx-auto">
          <div className="shadow-boxShadow">
            <Accrodion
              questions={QAndAOne.question}
              answers={QAndAOne.answer}
              accordion={accordionOne}
              setAccordion={setAccordionOne}
            />
            <Accrodion
              questions={QAndATwo.question}
              answers={QAndATwo.answer}
              accordion={accordionTwo}
              setAccordion={setAccordionTwo}
            />
            <Accrodion
              questions={QAndAThree.question}
              answers={QAndAThree.answer}
              accordion={accordionThree}
              setAccordion={setAccordionThree}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
