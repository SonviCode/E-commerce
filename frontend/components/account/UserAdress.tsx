import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../types/user";
import { RootState } from "../../store/store";
import { UNEXPECTED_ERROR, URL_UPDATE_USER_ADRESS } from "../../constants/Constants";
import axios from "axios";
import { setUser } from "../../store/features/slice/userSlice";
import { inputAdresseValue } from "../../utils/userUtils";

const dataDelivery = [
  {
    id: "adress",
    name: "adresse",
    type: "text",
    placeholder: "20 rue des Alpes",
  },
  {
    id: "city",
    name: "ville",
    type: "text",
    placeholder: "Tignes",
  },
  {
    id: "zipCode",
    type: "number",
    name: "code postale",
    placeholder: "73 320",
  },
];

const UserAdress = () => {
  const [textUpdate, setTextUpdate] = useState<string>("");

  const user: User = useSelector((state: RootState) => state.user.value);

  const dispatch = useDispatch();

  const handleAdress = (e: any) => {
    e.preventDefault();

    const adress: string = e.target.elements.adress.value;
    const city: string = e.target.elements.city.value;
    const zipCode: number = Number(e.target.elements.zipCode.value);

    const newAdress = {
      adress,
      city,
      zipCode,
    };

    if (JSON.stringify(user?.location) === JSON.stringify(newAdress)) {
      setTextUpdate("L'adresse est identique ❌");
    } else {
      axios
        .put(
          URL_UPDATE_USER_ADRESS +
            localStorage.getItem(process.env.NEXT_PUBLIC_USER_ID!),
          newAdress,
          {
            headers: {
              Authorization: localStorage.getItem(
                process.env.NEXT_PUBLIC_USER_TOKEN!
              ),
            },
          }
        )
        .then((res) => {
          dispatch(setUser(res.data));
          setTextUpdate("Adresse mise à jour ! ✅");
        })
        .catch(() => setTextUpdate(UNEXPECTED_ERROR));
    }

    setTimeout(() => {
      setTextUpdate("");
    }, 4000);
  };

  return (
    <form
      onSubmit={(e) => handleAdress(e)}
      className={`flex flex-col gap-5  rounded-md`}
    >
      <div className="flex flex-col md:flex-row gap-5 ">
        {dataDelivery.map((el, index) => (
          <div key={index} className="grow">
            <label htmlFor={el.id} className="text-xs title mb-2">
              {el.name}
            </label>
            <input
              className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500 peer invalid:border-red-600"
              type={el.type}
              id={el.id}
              defaultValue={inputAdresseValue(el, user)}
              required
              placeholder={el.placeholder}
              maxLength={el.id == "zipCode" ? 5 : 50}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="grow text-center">{textUpdate}</p>
        <button className="border bg-gray-200 rounded w-fit px-2 py-1 ">
          Mettre à jour l&apos;adresse
        </button>
      </div>
    </form>
  );
};

export default UserAdress;
