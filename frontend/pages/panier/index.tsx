import Head from "next/head";

import ReviewCheckout from "../../components/shop/ReviewCheckout";
import Summary from "../../components/shop/Summary";
import { COMPANY_NAME } from "../../constants/Constants";
import { useState } from "react";
import Indicator from "../../components/shop/Indicator";
import Login from "../../components/account/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { indicator } from "../../types/shop";
import { rollBackShop } from "../../utils/shopUtils";

export default function Shop() {
  const [numberIndicator, setNumberIndicator] = useState<indicator[]>([
    {
      actif: true,
      name: "Panier",
    },
    {
      actif: false,
      name: "Authentification",
    },
    {
      actif: false,
      name: "Livraison",
    },
    {
      actif: false,
      name: "Paiement",
    },
  ]);

  

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Panier</title>
      </Head>

      <div className="px-5 ">
        <Indicator
          numberIndicator={numberIndicator}
          setNumberIndicator={setNumberIndicator}
        />
        {numberIndicator[1].actif ? (
          <button
            onClick={() => rollBackShop(numberIndicator, setNumberIndicator)}
            className="text-xl flex gap-3 items-center lg:pl-10"
          >
            <FontAwesomeIcon icon={fs.faChevronLeft} />
            <span>Revenir en arrière</span>
          </button>
        ) : (
          ""
        )}

        <div className="flex flex-col-reverse lg:flex-row  pt-5 pb-10 gap-10 ">
          <div className="grow flex flex-col gap-10 overflow-hidden">
            {numberIndicator[1].actif ? (
              <div className="relative h-full flex justify-center px-5">
                <div className="border-2 rounded-lg p-5  w-full max-w-[400px]">
                  <Login />
                </div>
              </div>
            ) : (
              <ReviewCheckout />
            )}
          </div>
          <div className="lg:min-w-[285px] lg:w-1/4">
            <Summary
              numberIndicator={numberIndicator}
              setNumberIndicator={setNumberIndicator}
            />
          </div>
        </div>
      </div>
    </>
  );
}
