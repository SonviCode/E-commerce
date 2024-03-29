import Head from "next/head";
import ReviewCheckout from "../../components/shop/ReviewCheckout";
import Summary from "../../components/shop/Summary";
import { COMPANY_NAME, URL_SHOP_INDICATOR } from "../../constants/Constants";
import { useState, useEffect } from "react";
import Indicator from "../../components/shop/Indicator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { indicator } from "../../types/shop";
import { nextStepShop, prevStepShop } from "../../utils/shopUtils";
import ConnectModal from "../../components/account/ConnectModal";
import { useSelector } from "react-redux";
import { User } from "../../types/user";
import Delivery from "../../components/shop/Delivery";
import { GetStaticProps } from "next";
import UserInfo from "../../components/account/UserInfo";
import Payement from "../../components/shop/Payement";
import { RootState } from "../../store/store";
import useCheckJwt from "../../hooks/useCheckJwt";
import useShopStep from "../../hooks/useShopStep";

export default function Shop({
  shopIndicator,
}: {
  shopIndicator: indicator[];
}) {
  const [numberIndicator, setNumberIndicator] =
    useState<indicator[]>(shopIndicator);
  const [isAbleNextStep, setIsAbleNextStep] = useState<boolean>(false);

  const user: User = useSelector((state: RootState) => state.user.value);

  useCheckJwt();

  useShopStep({ numberIndicator, setIsAbleNextStep });

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Panier</title>
      </Head>

      <div className="px-5 ">
        <Indicator numberIndicator={numberIndicator} />
        <div className=" w-full lg:px-10 relative h-6">
          {numberIndicator[1].actif && (
            <button
              onClick={() => prevStepShop(numberIndicator, setNumberIndicator)}
              className="flex gap-1 xs:gap-3 items-center text-xs xs:text-base absolute left-0"
            >
              <FontAwesomeIcon icon={fs.faChevronLeft} />
              <span>Revenir en arrière</span>
            </button>
          )}
          {isAbleNextStep && (
            <button
              onClick={() => nextStepShop(numberIndicator, setNumberIndicator)}
              className=" flex gap-1 xs:gap-3 items-center text-xs xs:text-base absolute right-0"
            >
              <span>Prochaine étape</span>
              <FontAwesomeIcon icon={fs.faChevronRight} />
            </button>
          )}
        </div>

        <div
          className={`${
            numberIndicator[1].actif ? "flex-col" : "flex-col-reverse"
          } flex lg:flex-row pt-5 pb-10 gap-10 max-w-full`}
        >
          <div className="grow flex flex-col gap-10 ">
            {numberIndicator[3].actif ? (
              <Payement />
            ) : numberIndicator[2].actif ? (
              <Delivery />
            ) : numberIndicator[1].actif ? (
              <div className="grow">
                {user?.name ? (
                  <div className="border shadow-md h-full text-xl rounded-md p-5 flex flex-col gap-2.5">
                    <h2 className="text-2xl title mb-5">
                      Bien connecté <FontAwesomeIcon icon={fs.faCheck} />
                    </h2>
                    <UserInfo user={user} />
                  </div>
                ) : (
                  <ConnectModal />
                )}
              </div>
            ) : (
              <ReviewCheckout />
            )}
          </div>
          <div className="lg:min-w-[285px] lg:w-1/4 w-full ">
            <Summary
              numberIndicator={numberIndicator}
              setNumberIndicator={setNumberIndicator}
              isAbleNextStep={isAbleNextStep}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  shopIndicator: indicator[];
}> = async () => {
  const res = await fetch(URL_SHOP_INDICATOR);
  const shopIndicator: indicator[] = await res.json();

  return {
    props: {
      shopIndicator,
    },
  };
};
