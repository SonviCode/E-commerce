import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import {
  DOUBLE_EMAIL_ERROR,
  URL_SIGNUP,
  URL_SIGNUP_FORM_DATA,
} from "../../constants/Constants";
import { dataFormSignUp } from "../../types/account";
import { useDispatch } from "react-redux";
import { setNotif } from "../../store/features/slice/notifSlice";

const SignUp = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [dataForm, setDataForm] = useState<dataFormSignUp>();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(URL_SIGNUP_FORM_DATA)
      .then((res) => setDataForm(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const email: String = e.target.elements.email.value;
    const password: String = e.target.elements.password.value;
    const name: String = e.target.elements.name.value;
    const firstname: String = e.target.elements.firstname.value;
    const birthday: Date = e.target.elements.date.value;
    const phonenumber: number = e.target.elements.number.value;
    const adress: String = e.target.elements.adress.value;
    const city: String = e.target.elements.city.value;
    const zipcode: number = e.target.elements.zipcode.value;

    if (password !== e.target.elements.passwordConfirm.value) {
      return;
    }

    axios
      .post(URL_SIGNUP, {
        email,
        password,
        name,
        firstname,
        birthday,
        phonenumber,
        adress,
        city,
        zipcode,
      })
      .then((res) => {
        console.log(res);
        if (formRef.current != null) {
          formRef.current.reset();
        }
      })
      .catch((error) => {
        if (error.response.data.error.message == DOUBLE_EMAIL_ERROR) {
          dispatch(setNotif("error"));
        }
        console.log(error);
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={(e) => onSubmit(e)}
      className="flex flex-col gap-5 py-10"
    >
      {dataForm?.map((el, index) => (
        <div key={index}>
          <label htmlFor={el.id} className="title text-xs md:text-sm">
            {el.name} {el.required && "*"}
          </label>
          <input
            className="w-full text-xs md:text-sm border-2 rounded-md p-2 focus:border-main focus:outline-none"
            type={el.type}
            id={el.id}
            required={el.required}
            placeholder={`${el.example}`}
          />
        </div>
      ))}
      <button className="rounded-md bg-gray-200 hover:bg-main py-1 px-2 text-white duration-300 mt-5">
        S&apos;inscrire
      </button>
      <span className="text-xs">champs obligatoires *</span>
    </form>
  );
};

export default SignUp;
