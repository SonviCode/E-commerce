import React, { useState } from "react";
import { useSelector } from "react-redux";
import { subtotal } from "../../utils/shopUtils";

const initialValues = {
  name: "",
  card: "",
  date: "",
  cvv: "",
};

const Payement = ({ deliveryPrice }: { deliveryPrice: number }) => {
  const [values, setValues] = useState(initialValues);
  const shopData = useSelector((state: any) => state.shop.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    let formatValue: string | string[] = value;
    if (name == "cvv" || name == "card") {
      formatValue = value.replace(/[^\d]+/g, "");
    }

    if (name == "date") {
      formatValue = value.replace(/[^\d]+/g, "");

      // formatValue.splice(2, 0, "/");

      console.log(formatValue);
    }

    setValues({
      ...values,
      [name]: formatValue,
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-100 bg-gray-50 shadow-md p-5 rounded-lg"
        >
          <p className="text-xl title">Détailes de paiement </p>
          <div className="input_text mt-6 relative">
            <label htmlFor="name" className="text-sm ">
              Nom du propriétire
            </label>
            <input
              required
              value={values.name}
              onChange={handleInputChange}
              type="text"
              id="name"
              name="name"
              className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b rounded-lg"
              placeholder="John Row"
            />
            <i className="absolute left-2 top-4 text-gray-400 fa fa-user"></i>
          </div>
          <div className="input_text mt-4 relative">
            <label htmlFor="number" className="text-sm">
              Numéro de carte
            </label>
            <input
              required
              type="text"
              id="number"
              className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b rounded-lg"
              placeholder="0000 0000 0000 0000"
              maxLength={16}
              name="card"
              value={values.card}
              onChange={handleInputChange}
            />
            <i className="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i>
          </div>
          <div className="mt-4 flex gap-5 ">
            <div className="input_text relative w-full">
              <label htmlFor="expiration" className="text-sm ">
                Date d&apos;expiration
              </label>
              <input
                required
                type="text"
                id="expiration"
                name="date"
                className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b rounded-lg"
                placeholder="mm/yyyy"
                maxLength={6}
                value={values.date}
                onChange={handleInputChange}
              />
              <i className="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i>
            </div>
            <div className="input_text relative w-full">
              <label htmlFor="CVV" className="text-sm ">
                CVV
              </label>
              <input
                required
                value={values.cvv}
                onChange={handleInputChange}
                type="text"
                id="CVV"
                name="cvv"
                className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b rounded-lg"
                placeholder="000"
                maxLength={3}
              />
              <i className="absolute left-2 top-4 text-gray-400 fa fa-lock"></i>
            </div>
          </div>
          <div className="flex justify-between gap-10 py-5">
            <p className="text-lg text-center mt-4 text-gray-600 font-semibold">
              <span>{`${(subtotal(shopData) + deliveryPrice).toFixed(
                2
              )}€`}</span>
            </p>
            <button className="rounded-lg border-main border-2 items-center py-2 px-4 bg-main hover:text-white w-40 ">
              Payer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payement;
