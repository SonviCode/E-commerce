import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_GET_ORDERS_BY_EMAIL } from "../../constants/Constants";
import { User } from "../../types/user";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Order } from "../../types/shop";
import { amountPayement } from "../../utils/paymentUtils";
import { handleDate } from "../../utils/productUtils";
import StarProduct from "../UI/components/StarProduct";
import Image from "next/image";
import { productsItem } from "../../types/product";

const UserOrders = () => {
  const [orders, setOrders] = useState<Order[]>();
  const [isShownId, setIsShownId] = useState<string>();

  const user: User = useSelector((state: RootState) => state.user.value);

  useEffect(() => {
    axios
      .get<Order[]>(URL_GET_ORDERS_BY_EMAIL + user?.email, {
        headers: {
          Authorization: localStorage.getItem(
            process.env.NEXT_PUBLIC_USER_TOKEN!
          ),
        },
      })
      .then((res) => setOrders(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleOrder = (id: string) => {
    setIsShownId(id);
  };

  return (
    <div>
      <h2 className="title text-3xl mb-5">Commandes</h2>
      <h3>Historique des commandes :</h3>
      <div className="flex flex-col gap-10 mt-10">
        {orders &&
          orders.map((order: Order, key: React.Key) => (
            <div
              onClick={() => handleOrder(order._id)}
              key={key}
              className="cursor-pointer flex flex-col gap-10 border p-5 shadow-md rounded-md"
            >
              <div className="flex flex-wrap justify-between gap-x-10">
                <div>
                  <span className="font-bold flex flex-col">Date</span>
                  <span className="w-28">
                    {handleDate(order.createdDate.toString())}
                  </span>
                </div>
                <div>
                  <span className="font-bold flex flex-col">Nb produit</span>
                  <span className="w-28">
                    {order.products.length} produit
                    {order.products.length > 1 && "s"}
                  </span>
                </div>
                <div>
                  <span className="font-bold flex flex-col">Total</span>
                  <span className="w-28 text-end">
                    {amountPayement(order.payment.amount)}
                  </span>
                </div>
              </div>
              {isShownId === order._id && (
                <div className="flex flex-col gap-5">
                  <h2 className="text-xl">
                    Commande du {handleDate(order.createdDate.toString())}
                  </h2>
                  <span>Commande n°{order._id}</span>
                  <span className="mb-10">
                    <span className="font-bold"> Méthode de paiement : </span>
                    {order.payment.payment_method_types[0]}
                  </span>
                  <h2 className="text-xl font-bold">
                    Contenu de la commande :
                  </h2>
                  {order.products.map((el: productsItem, index: React.Key) => (
                    <React.Fragment key={index}>
                      <div className="flex justify-around flex-wrap gap-10 items-center">
                        <div className="overflow-hidden h-fit group max-w-[100px] rounded-md bg-gray-200 ">
                          <Image
                            src={el.imageUrl}
                            width="800"
                            height="800"
                            alt={el.name}
                            className=" object-center rounded-md p-2"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold ">{el.name}</h3>
                          <p className="text-sm truncate">
                            {el.smallDescription}
                          </p>
                          <p className="text-sm">
                            Taille :<span className="ml-2">{el.size}</span>{" "}
                          </p>
                          {el.star.length == 0 ? (
                            <span className="text-xs">Aucun avis</span>
                          ) : (
                            <div>
                              <span className="flex flex-row my-2">
                                <StarProduct star={el.star} />
                                <span className="ml-1">({el.star.length})</span>
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-10 items-center">
                          <span>X {el.counterShop}</span>
                        </div>
                      </div>
                      <hr />
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserOrders;
