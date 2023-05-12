import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import {
  URL_SIGNUP,
  URL_FORM_SIGNUP,
  DOUBLE_EMAIL_ERROR,
} from "../../constants/Constants";
import { dataFormSignUp, itemFormSignUp } from "../../types/account";
import { useDispatch } from "react-redux";
import { UserFetching } from "../../utils/authUser";
import { capitalize } from "../../utils/productUtils";

const SignUp = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [dataForm, setDataForm] = useState<dataFormSignUp>();
  const [errorRes, SetErrorRes] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(URL_FORM_SIGNUP)
      .then((res) => setDataForm(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const email: String = e.target.elements.email.value;
    const password: String = e.target.elements.password.value;
    let formData = {};

    if (password !== e.target.elements.passwordConfirm.value) {
      SetErrorRes("mots de passes non identiques");
      return;
    }
    if (e.target.elements.termsAndPrivacy.checked !== true) {
      SetErrorRes("vous devez acceptez les conditions");
      return;
    }
    dataForm?.forEach((item: itemFormSignUp) => {
      formData = { ...formData, [item.id]: e.target.elements[item.id].value };
    });

    axios
      .post(URL_SIGNUP, formData)
      .then(() => {
        UserFetching(email, password, SetErrorRes, dispatch);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.error.message.includes(DOUBLE_EMAIL_ERROR)) {
          SetErrorRes("email déjà utilisé");
        } else {
          SetErrorRes(error.response.data.error.message);
        }
      });
  };

  return (
    <form
      ref={formRef}
      id="formSignUp"
      onSubmit={(e) => onSubmit(e)}
      className="flex flex-col gap-5 py-10"
    >
      <div className="flex flex-col md:gap-5 md:grid md:grid-cols-2 gap-5">
        {dataForm?.map((el, index) => (
          <div key={index} className="flex flex-col">
            <label htmlFor={el.id} className="title text-xs md:text-sm">
              {el.name} <span className="text-main">{el.required && "*"}</span>
            </label>
            <input
              className="w-full  text-xs md:text-sm border-2 rounded-md p-2 focus:border-main focus:outline-none"
              type={el.type}
              id={el.id}
              onChange={() => SetErrorRes("")}
              required={el.required}
              placeholder={`${el.example}`}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          id="terms-and-privacy"
          name="termsAndPrivacy"
          type="checkbox"
          onChange={() => SetErrorRes("")}
          className="border-gray-300 rounded text-main focus:ring-main"
        />
        <label
          htmlFor="terms-and-privacy"
          className="ml-2 block text-sm text-gray-900"
        >
          J&apos;accepte les
          <a href="#" className="text-main">
            &nbsp;termes
          </a>
          &nbsp;et les
          <a href="#" className="text-main ">
            &nbsp;conditions
          </a>
          .
        </label>
      </div>
      {errorRes.trim() !== "" && (
        <div className="text-red-600 italic">{capitalize(errorRes)} !</div>
      )}
      <button className="rounded-md bg-gray-200 hover:bg-main py-1 px-2 text-white duration-300 ">
        S&apos;inscrire
      </button>
      <span className="text-xs">champs obligatoires *</span>
    </form>
  );
};

export default SignUp;
