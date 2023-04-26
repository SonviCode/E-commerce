import React from "react";
import { useSelector } from "react-redux";
import { productsItem } from "../../types/product";
import ProductCard from "../product/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../store/store";

const Historic = () => {
  const historicData: productsItem[] = useSelector(
    (state: RootState) => state.historic.value
  );

  return (
    <div className="border shadow-md  rounded-md px-5 py-10 overflow-hidden">
      <h2 className="text-2xl font-bold mb-5">Historique</h2>
      {historicData.length > 0 ? (
        <div className="flex gap-10 px-10 items-center">
          <FontAwesomeIcon icon={fs.faChevronLeft} />
          {historicData.map((historic: productsItem, index: React.Key) => (
            <div key={index}>
              <ProductCard el={historic} />
            </div>
          ))}
          <FontAwesomeIcon icon={fs.faChevronRight} />
        </div>
      ) : (
        <div>
          <h3 className="text-center p-5 text-xl">
            Vous n&apos;avez rien dans votre historique, continuez vos
            recherches !
          </h3>
        </div>
      )}
    </div>
  );
};

export default Historic;
