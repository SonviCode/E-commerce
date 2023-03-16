import React from "react";
import { User } from "../../types/user";
import { capitalize } from "../../utils/productUtils";
import { formatNumberPhone } from "../../utils/userUtils";

const UserInfo = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-5">Informations personnelles</h2>
      <div className="border text-xl rounded-md p-5 flex flex-col gap-2.5 grow">
        <p>Email : {user.email}</p>
        <hr />
        <p>Prénom : {capitalize(user.name)}</p>
        <hr />
        <p>Nom : {capitalize(user.firstname)}</p>
        <hr />
        <p className="flex">
          Numéro de téléphone : + 33{" "}
          <span className="flex gap-2 ml-2">
            {formatNumberPhone(user.phonenumber).map((n, i) => (
              <span key={i}>{n}</span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
