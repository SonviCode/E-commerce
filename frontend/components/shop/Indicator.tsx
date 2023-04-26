import React from "react";
import { indicator } from "../../types/shop";

const Indicator = ({ numberIndicator }: { numberIndicator: indicator[] }) => {
  return (
    <>
      <div className="py-5">
        <div className="flex flex-col xs:flex-row justify-around gap-5">
          <div className="h-2.5 w-[75%] mt-4 bg-gray-100 absolute -z-10 hidden xs:flex">
            <div
              className={`h-2.5 bg-main absolute -z-10 hidden xs:flex ${
                numberIndicator[3].actif
                  ? "w-full"
                  : numberIndicator[2].actif
                  ? "w-2/3"
                  : numberIndicator[1].actif
                  ? "w-1/3"
                  : ""
              }`}
            ></div>
          </div>

          {numberIndicator.map((el: indicator, i) => (
            <div
              key={i}
              className={`flex xs:flex-col xs:items-center xs:relative`}
            >
              <div
                className={`xs:rounded-full rounded-md w-full xs:w-10 xs:h-10 flex justify-start xs:justify-center items-center px-10 xs:p-0 text-white text-left ${
                  el.actif == true ? `bg-main` : `bg-gray-300`
                }`}
              >
                {i + 1}
              </div>
              <p className="absolute xs:relative right-10  xs:right-0">
                {el.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Indicator;
