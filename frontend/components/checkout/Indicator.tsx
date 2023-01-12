import React from "react";

const Indicator = () => {
  const numberIndicator = [
    {
      actif: true,
      name: "Panier",
    },
    {
      actif: false,
      name: "Authentification",
    },
    {
      actif: false,
      name: "Livraison",
    },
    {
      actif: false,
      name: "Paiement",
    },
  ];

  return (
    <>
      <div className="py-5">
        <div className="flex justify-around">
          <div className="h-2.5 w-[75%] mt-4 bg-gray-100 absolute -z-10"></div>
          {numberIndicator.map((el, i) => (
            <div key={i} className="flex  flex-col items-center">
              <div
                className={`rounded-full  w-10 h-10 flex justify-center items-center text-white ${
                  el.actif == true ? `bg-blue` : `bg-gray-300`
                }`}
              >
                {i + 1}
              </div>
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Indicator;
