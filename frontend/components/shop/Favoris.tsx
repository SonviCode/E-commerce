import Link from "next/link";
import React from "react";

const Favoris = () => {
  return (
    <div className="border-2 rounded-md px-5 py-10">
      <h2 className="text-2xl font-bold mb-5">
        <Link href="/favoris">
          <i className="fa-regular fa-heart cursor-pointer mr-5"></i>
        </Link>
        Favoris
      </h2>
      <div className="flex flex-col gap-2.5 ">
        <p>
          Vous n&apos;avez pas encore de produit(s) favoris. Prenez le temps de
          réfléchir et créez votre liste d&apos;articles favoris. Enregistrez-la
          pour plus tard.
        </p>
      </div>
    </div>
  );
};

export default Favoris;
