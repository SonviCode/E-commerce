import React, { useState } from "react";
import { indicator } from "../../types/shop";

const Indicator = ({
  numberIndicator,
  setNumberIndicator,
}: {
  numberIndicator: indicator[];
  setNumberIndicator: any;
}) => {
  
  const rollBack = (el: indicator) => {
    const index = numberIndicator.findIndex((step) => step.name === el.name);

    const newIndicator = [...numberIndicator];

    newIndicator.forEach((el: any) =>
      el.actif ? (newIndicator[index + 1].actif = false) : null
    );

    setNumberIndicator(newIndicator);
  };

  return (
    <>
      <div className="py-5">
        <div className="flex flex-col sm:flex-row justify-around">
          <div className="h-2.5 w-[75%] mt-4 bg-gray-100 absolute -z-10 ">
            <div
              className={`h-2.5 bg-main absolute -z-10 ${
                numberIndicator[1].actif
                  ? "w-1/3"
                  : numberIndicator[2].actif
                  ? "w-2/3"
                  : numberIndicator[3].actif
                  ? "w-full"
                  : ""
              }`}
            ></div>
          </div>
          {numberIndicator.map((el: indicator, i) => (
            <div
              onClick={() =>
                el.actif
                  ? rollBack(el)
                  : ""
              }
              key={i}
              className={`flex flex-col items-center  ${
                el.actif ? "cursor-pointer" : ""
              }`}
            >
              <div
                className={`rounded-full  w-10 h-10 flex justify-center items-center text-white ${
                  el.actif == true ? `bg-main` : `bg-gray-300`
                }`}
              >
                {i + 1}
              </div>
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Indicator;
