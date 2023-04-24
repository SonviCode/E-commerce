import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { User } from "../../types/user";

const adressObj: { [key: string | number]: null } = {
  adress: null,
  city: null,
  zipCode: null,
};

//  = futur facture
const invoice: { [key: string | number]: null } = {
  deliveryPrice: null,
};

const dataDelivery = [
  {
    id: "adress",
    name: "adresse",
    placeholder:"20 rue des Alpes"
  },
  {
    id: "city",
    name: "ville",
    placeholder:"Tignes"
  },
  {
    id: "zipCode",
    name: "code postale",
    placeholder:"73 320"
  },
];

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

const Delivery = ({ setDeliveryPrice }: { setDeliveryPrice: any }) => {
  const [isEmptyAdress, setIsEmptyAdress] = useState<boolean>(false);
  const user: User = useSelector((state: any) => state.user.value);

  const inputValueDefault = (el: any) => {
    let result: any;

    Object.entries(user?.location!).forEach((item: any) => {
      const [key, value] = item;

      if (key == el.id) {
        result = value;
      }
      return;
    });
    return result;
  };

  const handleDelivery = (el: any) => {
    invoice.deliveryPrice = el.price;
    setDeliveryPrice(el.price);
  };

  const handleAdress = (e: any, el: any) => {
    for (let key in adressObj) {
      if (key == el.id) {
        adressObj[key] = e.target.value;
      }
    }

    for (let key in adressObj) {
      if (adressObj[key] == null || adressObj[key] == "") {
        setIsEmptyAdress(false);
        return;
      }
    }
    console.log(adressObj);
    setIsEmptyAdress(true);
  };

  return (
    <div className="grow">
      <div className="border shadow-md rounded-md p-5 flex flex-col gap-2.5 grow  h-full">
        <h1 className="title text-2xl">Livraison</h1>
        <div className="flex flex-col md:flex-row gap-5">
          {dataDelivery.map((el, index) => (
            <div key={index} className="grow">
              <label htmlFor={el.id} className="text-xs title mb-2">
                {el.name}
              </label>
              <input
                className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500 peer invalid:border-red-600"
                type="text"
                id={el.id}
                onChange={(e) => handleAdress(e, el)}
                defaultValue={inputValueDefault(el)}
                required
                placeholder={el.placeholder}
                maxLength={el.id == "zipCode" ? 5 : 50}
              />
            </div>
          ))}
        </div>
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
