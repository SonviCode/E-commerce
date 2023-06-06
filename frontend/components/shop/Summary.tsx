/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import cb from "../../public/svg/cb.svg";
import ae from "../../public/svg/ae.svg";
import mastercard from "../../public/svg/mastercard.svg";
import paypal from "../../public/svg/paypal.svg";
import visa from "../../public/svg/visa.svg";
import btc from "../../public/btc.png";
import { useSelector } from "react-redux";
import { nextStepShop, subtotal } from "../../utils/shopUtils";
import { Delivery, SummaryProps } from "../../types/shop";
import { RootState } from "../../store/store";
import { productsData } from "../../types/product";

const Summary = ({
  numberIndicator,
  setNumberIndicator,
  isAbleNextStep,
}: SummaryProps) => {
  const shopData: productsData = useSelector(
    (state: RootState) => state.shop.value
  );
  const delivery: Delivery = useSelector((state: RootState) => state.delivery);

  const deliveryPrice = delivery.value.deliveryPrice;

  return (
    <div className="flex flex-col gap-10 border shadow-md rounded-md p-5 sticky top-24">
      <div className="flex flex-col gap-5">
        <h2 className="title text-xl">Récapitulatif</h2>
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <span>Sous-total</span>
            <span>
              {shopData.length > 0 ? `${subtotal(shopData).toFixed(2)}€` : "0€"}
            </span>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <span>Livraison</span>
            {numberIndicator[2].actif ? (
              <span>{`${deliveryPrice.toFixed(2)}€`}</span>
            ) : (
              <span className="text-xs text-right">
                Calculé à l'étape suivante
              </span>
            )}
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <span>Total</span>
            <span className="title">
              {shopData.length > 0
                ? `${(subtotal(shopData) + deliveryPrice).toFixed(2)}€`
                : "0€"}
            </span>
          </div>
        </div>
        {numberIndicator[3].actif ? (
          ""
        ) : (
          <button
            onClick={() =>
              isAbleNextStep &&
              nextStepShop(numberIndicator, setNumberIndicator)
            }
            className={`w-full rounded-md  py-2 ${
              isAbleNextStep || numberIndicator[3].actif
                ? `bg-main hover:text-white`
                : "bg-gray-200"
            }`}
          >
            Poursuivre la commande
          </button>
        )}
      </div>

      <div>
        <p className="mb-2.5">Moyen de paiement acceptés </p>
        <div className="grid grid-cols-3 justify-items-center">
          <Image src={cb} width={60} height={60} alt="cb" />
          <Image src={ae} width={60} height={60} alt="ae" />
          <Image src={paypal} width={60} height={60} alt="paypal" />
          <Image src={visa} width={60} height={60} alt="visa" />
          <Image src={mastercard} width={60} height={60} alt="mastercard" />
          <Image src={btc} width={35} height={35} alt="btc" />
        </div>
      </div>
    </div>
  );
};

export default Summary;
