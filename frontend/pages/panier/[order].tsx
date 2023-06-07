import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL_GET_ORDER } from "../../constants/Constants";
import { productsItem } from "../../types/product";
import { amountPayement } from "../../utils/paymentUtils";
import { removeAllItemShop } from "../../store/features/slice/shopSlice";
import { GetStaticPaths, GetStaticProps } from "next";
import { User } from "../../types/user";
import { RootState } from "../../store/store";
import { formatNumberPhone } from "../../utils/userUtils";
import { handleDate } from "../../utils/productUtils";
import { addDays } from "../../utils/shopUtils";
import { Order } from "../../types/shop";
import OrderListContent from "../../components/account/OrderListContent";

const Completion = ({ order }: { order: Order }) => {
  const user: User = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeAllItemShop(""));
  }, []);

  const nbArticle = order.products.length > 1 && "s";

  console.log(addDays(order.createdDate, 5));

  return (
    <div className="p-2 md:p-10">
      <div className="shadow-md p-4 md:p-10 rounded-md border max-w-5xl mx-auto">
        <h1 className="title text-3xl mb-10 text-center">
          Félicitation, le payement est réussi !
        </h1>
        {order && user ? (
          <>
            <h2 className="title mb-5 underline">Informations générales :</h2>
            <p className="flex flex-col xs:flex-row justify-between">
              Jour de la commande :{" "}
              <span className="italic font-bold">
                {handleDate(order.createdDate.toString())}
              </span>
            </p>
            <p className="flex flex-col xs:flex-row justify-between">
              Prix de la commande :{" "}
              <span className="italic font-bold">
                {amountPayement(order.payment.amount)}
              </span>
            </p>
            <p className="flex flex-col xs:flex-row justify-between">
              Nom :{" "}
              <span className="italic font-bold">
                {user.name}&nbsp;{user.firstname}
              </span>
            </p>
            <p className="flex flex-col xs:flex-row justify-between">
              Numéro :{" "}
              <span className="flex gap-2 italic font-bold">
                + 33
                {formatNumberPhone(user.phonenumber).map((n, i) => (
                  <span key={i}>{n}</span>
                ))}
              </span>
            </p>
            <p className="flex flex-col xs:flex-row justify-between">
              Adresse :{" "}
              <div className="flex flex-col italic font-bold xs:text-end">
                {user.location.adress} - {user.location.city} -&nbsp;
                {user.location.zipCode}
              </div>
            </p>
            <div className="pt-10">
              <h2 className="title underline">Livraison :</h2>
              <div className="flex flex-col sm:flex-row gap-y-5 justify-between py-5">
                <div className="flex flex-col">
                  <span>Adresse de livraison</span>
                  <div className="flex flex-col">
                    <span className="italic font-bold">
                      {order.delivery.value.location.adress}
                    </span>
                    <span className="italic font-bold">
                      {order.delivery.value.location.city}
                    </span>
                    <span className="italic font-bold">
                      {order.delivery.value.location.zipCode}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span>Type de livraison</span>
                  <span className="italic font-bold">
                    {order.delivery.value.deliveryName}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>Prix de livraison</span>
                  <span className="italic font-bold">
                    {order.delivery.value.deliveryPrice} €
                  </span>
                </div>
              </div>
              {order.delivery.value.deliveryName === "standard" ? (
                <p>
                  Date de livraison éstimée entre le{" "}
                  <span className="italic font-bold">
                    {handleDate(addDays(order.createdDate, 2).toString())}&nbsp;
                  </span>
                  et le&nbsp;
                  <span className="italic font-bold">
                    {handleDate(addDays(order.createdDate, 3).toString())}
                  </span>
                </p>
              ) : (
                <p>
                  Date de livraison éstimée le{" "}
                  <span className="italic font-bold">
                    {handleDate(addDays(order.createdDate, 1).toString())}&nbsp;
                  </span>
                </p>
              )}
            </div>
            <div className="flex flex-col gap-10 py-10">
              <h2 className="title underline">
                Article{nbArticle} commandé{nbArticle} :
              </h2>
              {order.products.map((el: productsItem, index: React.Key) => (
                <OrderListContent el={el} key={index} />
              ))}
            </div>
          </>
        ) : (
          "loader.."
        )}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ order: any }> = async (
  context
) => {
  const id = context.params!.order;

  const res = await fetch(URL_GET_ORDER + "/" + id);
  const order: any = await res.json();

  return {
    props: {
      order,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(URL_GET_ORDER);
  const order: any = await res.json();

  const ids = order.map((order: any) => order.payment.id);
  const paths = ids.map((id: string) => ({
    params: { order: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Completion;
