import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL_GET_ORDER } from "../../constants/Constants";
import { productsItem } from "../../types/product";
import Image from "next/image";
import StarProduct from "../../components/UI/components/StarProduct";
import { amountPayement } from "../../utils/paymentUtils";
import { removeAllItemShop } from "../../store/features/slice/shopSlice";
import { GetStaticPaths, GetStaticProps } from "next";
import { User } from "../../types/user";
import { RootState } from "../../store/store";
import { formatNumberPhone } from "../../utils/userUtils";

const Completion = ({ order }: any) => {
  const user: User = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeAllItemShop(""));
  }, []);

  return (
    <div className="p-2 md:p-10">
      <div className="shadow-md p-4 md:p-10 rounded-md border max-w-5xl mx-auto">
        <h1 className="title mb-10">Félicitation, le payement est réussi !</h1>
        {order && user ? (
          <>
            <p className="flex flex-col xs:flex-row justify-between">
              Prix de la commande :{" "}
              <span className="italic font-bold">
                {amountPayement(order.payment.amount)}
              </span>
            </p>
            <p className="flex flex-col xs:flex-row justify-between">
              Nom : <span className="italic font-bold">{user.name}</span>
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
              <span className="italic font-bold">
                {user.location.adress} : {user.location.zipcode} -{" "}
                {user.location.city}
              </span>
            </p>
            <div className="flex flex-col gap-10 py-10">
              {order.products.map((el: productsItem, index: React.Key) => (
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
