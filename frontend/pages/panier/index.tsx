import Head from "next/head";

import ReviewCheckout from "../../components/shop/ReviewCheckout";
import Summary from "../../components/shop/Summary";
import { COMPANY_NAME } from "../../constants/Constants";
import { useState } from "react";
import Indicator from "../../components/shop/Indicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { indicator } from "../../types/shop";
import { prevStepShop } from "../../utils/shopUtils";
import ConnectModal from "../../components/account/ConnectModal";
import { useSelector } from "react-redux";
import { User } from "../../types/user";
import { capitalize } from "../../utils/productUtils";

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

  const user: User = useSelector((state: any) => state.user.value);

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
            onClick={() => prevStepShop(numberIndicator, setNumberIndicator)}
            className="text-xl flex gap-3 items-center lg:pl-10"
          >
            <FontAwesomeIcon icon={fs.faChevronLeft} />
            <span>Revenir en arrière</span>
          </button>
        ) : (
          ""
        )}

        <div
          className={`${
            numberIndicator[1].actif ? "flex-col" : "flex-col-reverse"
          } flex  lg:flex-row  pt-5 pb-10 gap-10 `}
        >
          <div className="grow flex flex-col  gap-10 overflow-hidden">
            {numberIndicator[1].actif ? (
              <div className="grow">
                {user ? (
                  <div className="border text-xl rounded-md p-5 flex flex-col gap-2.5 grow py-10">
                    <h2 className="text-2xl font-bold mb-5">
                      Bien connecté en tant que {capitalize(user.name)}{" "}
                      {capitalize(user.firstname)}
                    </h2>
                    <p className="italic">{user.email}</p>
                    
                  </div>
                ) : (
                  <ConnectModal />
                )}
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
