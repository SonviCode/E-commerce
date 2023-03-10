import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_GETUSER } from "../../constants/Constants";
import { User } from "../../types/user";
import { formatNumberPhone } from "../../utils/user";
import Historic from "../favoris/Historic";
import { capitalize } from "../../utils/productUtils";
import { useDispatch, useSelector } from "react-redux";
import { removeHistoric } from "../../store/features/slice/historicSlice";
import { productsItem } from "../../types/product";

const UserAccount = () => {
  const [tab, setTab] = useState<number>(1);
  const [user, setUser] = useState<User>();

  const historicData: productsItem[] = useSelector(
    (state: any) => state.historic.value
  );

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get<User>(
        URL_GETUSER + localStorage.getItem(process.env.NEXT_PUBLIC_USER_ID!),
        {
          headers: {
            Authorization: localStorage.getItem(
              process.env.NEXT_PUBLIC_USER_TOKEN!
            ),
          },
        }
      )
      .then((res) => {
        delete res.data.password;
        setUser(res.data),
          localStorage.setItem(
            process.env.NEXT_PUBLIC_USER_DATA!,
            JSON.stringify(res.data)
          );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row p-5 pb-10 gap-10 ">
      <div className="lg:min-w-[300px] lg:w-1/4">
        <div className="flex flex-col gap-10 border-2 rounded-md p-5 sticky top-0  justify-between h-full">
          <h1 className="text-3xl">Bienvenue {user && user.name} !</h1>
          <div className="flex flex-col gap-2.5">
            {[
              "Informations personnelles",
              "Commandes",
              "Historique de navigation",
            ].map((el: string, i: any) => (
              <React.Fragment key={i}>
                <button
                  className="hover:font-semibold text-left"
                  onClick={() => setTab(i + 1)}
                >
                  {el}
                </button>
                <hr />
              </React.Fragment>
            ))}
          </div>
          <button className="w-full rounded-md bg-main py-2 ">
            Se déconnecter
          </button>
        </div>
      </div>

      <div className="grow flex flex-col gap-10 overflow-hidden">
        <div className=" min-h-[500px] h-full relative">
          {tab === 1 ? (
            <div className="flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-5">
                Informations personnelles
              </h2>
              <div className="border text-xl rounded-md p-5 flex flex-col gap-2.5 grow">
                <p>Email : {user && user.email}</p>
                <hr />
                <p>Prénom : {user && capitalize(user.name)}</p>
                <hr />
                <p>Nom : {user && capitalize(user.firstname)}</p>
                <hr />
                <p className="flex">
                  Numéro de téléphone : + 33{" "}
                  <span className="flex gap-2 ml-2">
                    {user &&
                      formatNumberPhone(user.phonenumber).map((n, i) => (
                        <span key={i}>{n}</span>
                      ))}
                  </span>
                </p>
              </div>
            </div>
          ) : tab === 2 ? (
            <>
              <h2 className="text-2xl font-bold mb-5">Commandes</h2>
              <div className="flex flex-col gap-2.5">
                <h3>Historique des commandes :</h3>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-5">Navigation</h2>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-xl">Historique de navigation :</h3>
                <Historic />
                {historicData.length > 0 ? (
                  <>
                    <h3 className="text-xl">
                      Vous souhaitez supprimer votre historique ?
                    </h3>
                    <button
                      onClick={() => dispatch(removeHistoric())}
                      className="w-fit p-2 rounded-md border"
                    >
                      Cliquez ici !
                    </button>
                  </>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
