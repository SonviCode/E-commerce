import React from "react";
import { ArrayAvg, starInArray } from "../../../utils/productUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";

const StarProduct = ({ star }: { star: number[] }) => {
  return (
    <>
      {starInArray(ArrayAvg(star)).map((nb, i) => (
        <span key={i}>
          {nb == 1 ? (
            <FontAwesomeIcon icon={fs.faStar} className="text-yellow-300" />
          ) : nb == 5 ? (
            <FontAwesomeIcon
              icon={fs.faStarHalfStroke}
              className="text-yellow-300"
            />
          ) : (
            <FontAwesomeIcon icon={fs.faStar} className="text-gray-200" />
          )}
        </span>
      ))}
    </>
  );
};

export default StarProduct;
