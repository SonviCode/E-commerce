import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../types/user";
import { RootState } from "../../store/store";
import { Delivery } from "../../types/shop";
import { setDelivery } from "../../store/features/slice/deliverySlice";

import UserAdress from "../account/UserAdress";

const choiseDelivery = [
  {
    name: "standard",
    text: "Pour toute commande passée avant 12H, livraison en 48H à domicile",
    price: 6.99,
    image: "/laposte.webp",
  },
  {
    name: "express",
    text: "Pour toute commande passée avant 12H, livraison en 24/72H à domicile.",
    price: 10.99,
    image: "/chronopost.webp",
  },
];

const Delivery = () => {
  const user: User = useSelector((state: RootState) => state.user.value);
  const delivery: Delivery = useSelector((state: RootState) => state.delivery.value);

  const dispatch = useDispatch();
  
  const handleDelivery = (el: any) => {
    console.log("delivery :",delivery);
    console.log(el);
    
    dispatch(
      setDelivery({
        deliveryName: el.name,
        deliveryPrice: el.price,
        location: user?.location,
      })
    );
  };

  return (
    <div className="grow">
      <div className="border shadow-md rounded-md p-5 flex flex-col gap-2.5 grow  h-full">
        <h1 className="title text-2xl">Livraison</h1>
        <UserAdress />
        <div className="flex flex-col py-10 gap-10">
          {choiseDelivery.map((el, index) => (
            <div
              key={index}
              className="flex relative justify-between items-center"
            >
              <div className="flex ">
                <label
                  htmlFor={el.name}
                  className="absolute w-full h-full  cursor-pointer"
                ></label>
                <input
                  type="radio"
                  checked={delivery?.deliveryName == el.name}
                  id={el.name}
                  value={el.name}
                  name="delivery"
                  onChange={() => handleDelivery(el)}
                />
                <div className="flex  flex-col md:flex-row">
                  <div className="w-10 h-10 mx-5 relative pointer-events-none">
                    <Image
                      fill
                      src={el.image}
                      alt={el.name}
                      className="rounded-md "
                    />
                  </div>
                  <div>
                    <h3 className="title">Livraison {el.name}</h3>
                    <p className="text-xs md:text-sm">{el.text}</p>
                  </div>
                </div>
              </div>
              <span className="title">{el.price}€</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
