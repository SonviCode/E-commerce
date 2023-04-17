import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import * as fs from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  URL_CREATE_PRODUCT,
  URL_FORM_CREATE_PRODUCT_INPUT,
  URL_FORM_CREATE_PRODUCT_SELECT,
} from "../../constants/Constants";
import {
  createProductInput,
  createProductInputItem,
  createProductSelect,
  createProductSelectItem,
} from "../../types/product";
import { logout } from "../../utils/userUtils";
import { useDispatch } from "react-redux";

const AdminAccount = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [createProduct, setCreateProduct] = useState<boolean>(false);
  const [dataSelect, setDataSelect] = useState<createProductSelect>();
  const [dataInput, setDataInput] = useState<createProductInput>();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(URL_FORM_CREATE_PRODUCT_INPUT)
      .then((res) => setDataInput(res.data))
      .catch((err) => console.log(err));

    axios
      .get(URL_FORM_CREATE_PRODUCT_SELECT)
      .then((res) => setDataSelect(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const insertValueFormData = (
      array: createProductSelect | createProductInput
    ) => {
      array.forEach(
        (item: createProductInputItem | createProductSelectItem) => {
          formData.append(item.id, e.target.elements[item.id].value);
        }
      );
    };

    insertValueFormData(dataSelect as createProductSelect);
    insertValueFormData(dataInput as createProductInput);

    axios
      .post(URL_CREATE_PRODUCT, formData, {
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
              encType="multipart/form-data"
              className="w-full flex flex-col gap-5"
            >
              <div className="w-full flex flex-wrap flex-col sm:flex-row gap-5">
                <div className="sm:basis-1/2">
                  {dataInput?.map((el: createProductInputItem, index) => (
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
                        step={0.01}
                        placeholder={`Saisissez votre ${el.name}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="sm:grow">
                  {dataSelect?.map((item: createProductSelectItem, index) => (
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
                          <option key={index}>{el}</option>
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
                  name="file"
                  id="file"
                  required
                />
              </div>
              <button className="p-2 rounded-md bg-main w-fit uppercase text-white text  text-end">
                Ajouter{" "}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col gap-10">
            <button
              onClick={() => setCreateProduct(true)}
              className="p-2 rounded-md bg-main w-fit"
            >
              Ajouter un produit
            </button>
            <button
              onClick={() => logout(dispatch)}
              className="w-fit rounded-md bg-main p-2 "
            >
              Se déconnecter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAccount;
