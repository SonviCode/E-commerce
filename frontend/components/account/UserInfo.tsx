import React from "react";
import { User } from "../../types/user";
import { capitalize } from "../../utils/productUtils";
import { formatNumberPhone, logout } from "../../utils/userUtils";
import { useDispatch } from "react-redux";

const UserInfo = ({ user }: { user: User }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between h-full gap-20">
      <ul className="flex flex-col  gap-2 text-sm md:text-lg">
        <li className="flex gap-5">
          <span className="title">Email :</span>{" "}
          <span className="italic">{user.email}</span>
        </li>
        <li className="flex gap-5">
          <span className="title">Prénom :</span>{" "}
          <span className="italic">{user.firstname}</span>
        </li>
        <li className="flex gap-5">
          <span className="title">Nom :</span>{" "}
          <span className="italic">{user.name}</span>
        </li>
        <li className="flex gap-x-5 flex-wrap">
          <span className="flex gap-2 title">Numéro de téléphone :</span>
          <span className="flex gap-2 italic">
            + 33
            {formatNumberPhone(user.phonenumber).map((n, i) => (
              <span key={i}>{n}</span>
            ))}
          </span>
        </li>
      </ul>

      <button
        onClick={() => logout(dispatch)}
        className="w-fit text-sm rounded-md bg-gray-50 shadow-md p-2 "
      >
        Se déconnecter
      </button>
    </div>
  );
};

export default UserInfo;
