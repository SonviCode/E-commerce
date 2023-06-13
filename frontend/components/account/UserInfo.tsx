import React from "react";
import { User } from "../../types/user";
import { formatNumberPhone } from "../../utils/userUtils";

const UserInfo = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col justify-between gap-20 mb-20">
      <ul className="flex flex-col  gap-2 text-sm md:text-lg">
        <li className="flex gap-5">
          <span className="title">Email :</span>{" "}
          <span className="italic">{user?.email}</span>
        </li>
        <li className="flex gap-5">
          <span className="title">Prénom :</span>{" "}
          <span className="italic">{user?.firstname}</span>
        </li>
        <li className="flex gap-5">
          <span className="title">Nom :</span>{" "}
          <span className="italic">{user?.name}</span>
        </li>
        {user && (
          <li className="flex gap-x-5 flex-wrap">
            <span className="flex gap-2 title">Numéro de téléphone :</span>
            <span className="flex gap-2 italic">
              + 33
              {formatNumberPhone(user.phonenumber).map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default UserInfo;
