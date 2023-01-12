/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Summary = () => {
  return (
    <div className="flex flex-col gap-10 border-2 rounded-md p-5   sticky top-24">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-xl">Récapitulatif</h2>
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <span>Sous-total</span>
            <span>0€</span>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <span>Livraison</span>
            <span className="text-xs">Calculé à l'étape suivante</span>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <span>Total</span>
            <span>0€</span>
          </div>
        </div>
        <button className="w-full rounded-md bg-yellow-300 py-2 ">
          Poursuivre la commande
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p>Moyen de paiement acceptés</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Summary;
