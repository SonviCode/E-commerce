import React, { useState } from "react";
import { User } from "../../types/user";
import { logout } from "../../utils/userUtils";
import Historic from "../favoris/Historic";
import { useDispatch, useSelector } from "react-redux";
import { removeHistoric } from "../../store/features/slice/historicSlice";
import { productsItem } from "../../types/product";
import UserInfo from "./UserInfo";
import AdminAccount from "./AdminAccount";
import UserOrders from "./UserOrders";
import { RootState } from "../../store/store";
import UserAdress from "./UserAdress";

const UserAccount = ({ user }: { user: User }) => {
  const [tab, setTab] = useState<number>(1);

  const historicData: productsItem[] = useSelector(
    (state: RootState) => state.historic.value
  );

  const dispatch = useDispatch();

  if (user!.role == "admin") {
    return <AdminAccount />;
  }

  return (
    <div className="flex flex-col lg:flex-row p-5 pb-10 gap-10 ">
      <div className="lg:min-w-[300px] lg:w-1/4">
        <div className="flex flex-col gap-10 border-2 rounded-md p-5 sticky top-0  justify-between h-full">
          <h1 className="text-3xl">Bienvenue {user!.firstname} !</h1>
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
          <button
            onClick={() => logout(dispatch)}
            className="w-full rounded-md bg-main py-2 "
          >
            Se déconnecter
          </button>
        </div>
      </div>

      <div className="grow flex flex-col gap-10 overflow-hidden">
        <div className=" min-h-[500px] h-full relative">
          {tab === 1 ? (
            <>
              <UserInfo user={user} />
              <h2 className="title text-xl mb-5">Localisation</h2>
              <UserAdress />
            </>
          ) : tab === 2 ? (
            <UserOrders />
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
