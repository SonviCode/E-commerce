import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeItemShop } from "../../../store/features/slice/shopSlice";
import { productsItem } from "../../../types/product";

const ConfirmModal = ({
  product,
  setConfirmNotif,
}: {
  product: productsItem;
  setConfirmNotif: any;
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-20`}
    >
      <div
        className={`fixed shadow-md rounded-lg top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 p-5 w-[80%] max-w-[400px] border-2 bg-white z-20 flex flex-col gap-10 text-lg`}
      >
        <h2>
          Êtes-vous sûr de vouloir supprimer le produit :
          <span className="font-bold px-2">
            &quot;{product.name}
            &quot;
          </span>{" "}
          de votre panier ?
        </h2>
        <div className="flex justify-between">
          <button
            className="border rounded-lg p-1 text-sm hover:border-main"
            onClick={() => setConfirmNotif(false)}
          >
            Annuler{" "}
            <span className="mx-1">
              <FontAwesomeIcon icon={fs.faXmark} />
            </span>
          </button>
          <button
            className="border rounded-lg p-1 text-sm hover:border-main"
            onClick={() => {
              setConfirmNotif(false);
              dispatch(removeItemShop(product));
            }}
          >
            Confirmer
            <span className="mx-1">
              <FontAwesomeIcon icon={fs.faCheck} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
