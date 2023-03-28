import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { User } from "../../types/user";
import * as fs from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { URL_CREATE_PRODUCT } from "../../constants/Constants";
import { capitalize } from "../../utils/productUtils";

const dataFormCreateProduct = [
  {
    id: "name",
    name: "nom",
    type: "text",
  },
  {
    id: "price",
    name: "prix",
    type: "number",
  },
  {
    id: "smallDescription",
    name: "petite description",
    type: "text",
  },
  {
    id: "bigDescription",
    name: "grande description",
    type: "text",
  },
  {
    id: "brand",
    name: "marque",
    type: "text",
  },
];

const dataFormSelect = [
  { id: "sex", data: ["homme", "femme"] },
  { id: "type", data: ["veste", "t-shirt", "pantalon", "chaussette"] },
  { id: "category", data: ["habits", "chaussures", "accessoires"] },
  { id: "size", data: ["S", "M", "L", "XL"] },
  { id: "sport", data: ["rando", "alpinisme", "vélo"] },
];

const AdminAccount = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const user: User = useSelector((state: any) => state.user.value);

  const [createProduct, setCreateProduct] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const name: String = e.target.elements.name.value;
    const price: Number = e.target.elements.price.value;
    const smallDescription: String = e.target.elements.smallDescription.value;
    const bigDescription: String = e.target.elements.bigDescription.value;
    const brand: String = e.target.elements.brand.value;
    const sex: String = e.target.elements.sex.value;
    const type: String = e.target.elements.type.value;
    const category: String = e.target.elements.category.value;
    const sport: String = e.target.elements.sport.value;
    const size: String = e.target.elements.size.value;
    const file = e.target.elements.file.files[0];

    console.log({ ...file });

    const formData = new FormData();
    formData.append("file", { ...file });

    console.log(FormData);
    console.log({ ...formData });

    axios
      .post(URL_CREATE_PRODUCT, file, {
        headers: {
          Authorization: localStorage.getItem(
            process.env.NEXT_PUBLIC_USER_TOKEN!
          ),
        },
      })
      .then((res) => console.log(res));

    if (formRef.current != null) {
      formRef.current.reset();
    }
  };

  console.log(user);

  return (
    <div className="p-5 h-full max-w-screen-2xl">
      <div className="flex flex-col  border-2 rounded-md p-5 h-full">
        <h1 className="my-5 uppercase text-gray-700 text-xl font-bold">
          Compte Admin
        </h1>
        {createProduct ? (
          <>
            <button
              onClick={() => setCreateProduct(false)}
              className="flex gap-1 xs:gap-3 items-center text-xs xs:text-base mb-5 w-fit"
            >
              <FontAwesomeIcon icon={fs.faChevronLeft} />
              <span>Revenir en arrière</span>
            </button>
            <hr />
            <form
              ref={formRef}
              onSubmit={(e) => onSubmit(e)}
              id="form"
              className="w-full flex flex-col gap-5"
            >
              <div className="w-full flex flex-wrap flex-col sm:flex-row gap-5">
                <div className="sm:basis-1/2">
                  {dataFormCreateProduct.map((el, index) => (
                    <div key={index}>
                      <label
                        htmlFor={el.id}
                        className="uppercase text-gray-700 text-xs font-bold mb-2"
                      >
                        {el.name}
                      </label>
                      <input
                        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 peer invalid:border-red-600"
                        type={el.type}
                        id={el.id}
                        required
                        placeholder={`Saisissez votre ${el.name}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="sm:grow">
                  {dataFormSelect.map((item, index: any) => (
                    <div className="w-full" key={index}>
                      <label
                        htmlFor={item.id}
                        className="uppercase text-gray-700 text-xs font-bold mb-2"
                      >
                        {item.id}
                      </label>
                      <select
                        className="cursor-pointer w-full bg-gray-200 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none  focus:border-gray-500 uppercase text-gray-700 text-xs font-bold h-[45.6px]"
                        id={item.id}
                      >
                        {item.data.map((el: string, index: any) => (
                          <option key={index}>{capitalize(el)}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label
                  htmlFor="file"
                  className="uppercase text-gray-700 text-xs font-bold mb-2"
                >
                  Photo
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 invalid:border-red-600"
                  type="file"
                  id="file"
                  ref={fileRef}
                  required
                />
              </div>
              <button className="p-2 rounded-md bg-main w-fit uppercase text-white text  text-end">
                Ajouter{" "}
              </button>
            </form>
          </>
        ) : (
          <button
            onClick={() => setCreateProduct(true)}
            className="p-2 rounded-md bg-main w-fit"
          >
            Ajouter un produit
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminAccount;
