import Head from "next/head";
import { COMPANY_NAME } from "../../constants/Constants";
import { useEffect } from "react";
import UserAccount from "../../components/account/UserAccount";
import { User } from "../../types/user";
import { useDispatch, useSelector } from "react-redux";
import ConnectModal from "../../components/account/ConnectModal";
import { checkJwtFromLocalStorage } from "../../utils/authUser";
import { RootState } from "../../store/store";

export default function Account() {
  const user: User = useSelector((state: RootState) => state.user.value);

  const dispatch = useDispatch();

  useEffect(() => {
    checkJwtFromLocalStorage(dispatch);
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Compte</title>
      </Head>

      {user && Object.keys(user!).length > 0 ? (
        <UserAccount />
      ) : (
        <div className="pb-10 px-5">
          <ConnectModal />
        </div>
      )}
    </>
  );
}
