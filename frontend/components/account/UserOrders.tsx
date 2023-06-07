import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_GET_ORDERS_BY_EMAIL } from "../../constants/Constants";
import { User } from "../../types/user";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Order } from "../../types/shop";
import { amountPayement } from "../../utils/paymentUtils";
import { handleDate } from "../../utils/productUtils";
import OrderListContent from "./OrderListContent";
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
                    <OrderListContent el={el} key={index} />
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
