import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  URL_STRIPE_GET_PAYMENT,
  URL_CREATE_ORDER,
} from "../../constants/Constants";
import { RootState } from "../../store/store";
import { productsData, productsItem } from "../../types/product";
import Image from "next/image";
import StarProduct from "../../components/UI/components/StarProduct";
import { amountPayement } from "../../utils/paymentUtils";
import { User } from "../../types/user";
import { checkJwtFromLocalStorage } from "../../utils/authUser";

const Completion = () => {
  const router = useRouter();
  const [dataOrder, setDataOrder] = useState<productsData>();
  const [paymentIntent, setPaymentIntent] = useState<any>();

  const shopData: productsData = useSelector(
    (state: RootState) => state.shop.value
  );
  const user: User = useSelector((state: RootState) => state.user.value);

  const dispatch = useDispatch();

  useEffect(() => {
    checkJwtFromLocalStorage(dispatch);
  }, [dispatch]);

  useEffect(() => {
    console.log("1");

    router.query.payment_intent &&
      axios
        .get(URL_STRIPE_GET_PAYMENT + router.query.payment_intent)
        .then(async (res) => {
          setPaymentIntent(await res.data.paymentIntent);
        })
        .catch((err) => console.log(err));

    setDataOrder(shopData);
  }, [router.query.payment_intent, shopData]);

  useEffect(() => {
    console.log("test");

    console.log(paymentIntent);
    console.log(dataOrder);
    console.log(user);

    if (
      paymentIntent !== undefined &&
      dataOrder !== undefined &&
      user !== undefined
    ) {
      console.log("ok");

      axios
        .post(
          URL_CREATE_ORDER,
          { user: user, payment: paymentIntent, products: dataOrder },
          {
            headers: {
              Authorization: localStorage.getItem(
                process.env.NEXT_PUBLIC_USER_TOKEN!
              ),
            },
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [paymentIntent, dataOrder, user]);

  return (
    <div className="p-2 md:p-10">
      <div className="shadow-md p-4 md:p-10 rounded-md border max-w-5xl mx-auto">
        <h1 className="title mb-10">Félicitation, le payement est réussi !</h1>
        {paymentIntent ? (
          <>
            <p className="flex flex-col xs:flex-row justify-between">
              Prix de la commande :{" "}
              <span className="italic font-bold">
                {amountPayement(paymentIntent.amount)}
              </span>
            </p>
            <p className="flex flex-col xs:flex-row justify-between">
              Nom :{" "}
              <span className="italic font-bold">
                {paymentIntent.shipping.name}
              </span>
            </p>
            <p className="flex flex-col xs:flex-row justify-between">
              Numéro :{" "}
              <span className="italic font-bold">
                {paymentIntent.shipping.phone
                  ? paymentIntent.shipping.phone
                  : "Pas de numéro renseigné"}
              </span>
            </p>
            <p className="flex flex-col xs:flex-row justify-between">
              Adresse :{" "}
              <span className="italic font-bold">
                {paymentIntent.shipping.address.country} :{" "}
                {paymentIntent.shipping.address.city} -{" "}
                {paymentIntent.shipping.address.line1} -{" "}
                {paymentIntent.shipping.address.postal_code}
              </span>
            </p>
          </>
        ) : (
          "loader.."
        )}
        <div className="flex flex-col gap-10 py-10">
          {dataOrder &&
            dataOrder.map((el: productsItem, index: React.Key) => (
              <React.Fragment key={index}>
                <div className="flex justify-between flex-wrap gap-10">
                  <div className="overflow-hidden h-fit group max-w-[100px] rounded-md bg-gray-200 ">
                    <Image
                      src={el.imageUrl}
                      width="800"
                      height="800"
                      alt={el.name}
                      className=" object-center rounded-md p-2"
                    />
                  </div>
                  <div className="flex gap-10 items-center">
                    <div className="flex flex-col justify-between w-[138px]">
                      <div>
                        <h3 className="text-sm font-bold ">{el.name}</h3>
                        <p className="text-sm truncate">
                          {el.smallDescription}
                        </p>
                        <span className="flex flex-row my-2">
                          <StarProduct star={el.star} />
                          <span className="ml-1">({el.star.length})</span>
                        </span>
                        <div className="flex gap-4 items-center">
                          <span className="text-xs font-bold ">
                            {el.price.toFixed(2)}€
                          </span>
                          <p className="text-xs">
                            Taille :<span className="ml-2">{el.size}</span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <span>X {el.counterShop}</span>
                  </div>
                  <div className="flex items-center">
                    <span className=" w-20 text-center mx-5">
                      {(el.price * el.counterShop).toFixed(2)}€
                    </span>
                  </div>
                </div>
                <hr />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Completion;
