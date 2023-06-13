import Head from "next/head";
import { COMPANY_NAME } from "../../constants/Constants";
import UserAccount from "../../components/account/UserAccount";
import { User } from "../../types/user";
import { useSelector } from "react-redux";
import ConnectModal from "../../components/account/ConnectModal";
import { RootState } from "../../store/store";
import useCheckJwt from "../../hooks/useCheckJwt";

export default function Account() {
  const user: User = useSelector((state: RootState) => state.user.value);

  useCheckJwt();

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Compte</title>
      </Head>

      {user && Object.keys(user!).length > 0 ? (
        <UserAccount user={user}/>
      ) : (
        <div className="pb-10 px-5">
          <ConnectModal />
        </div>
      )}
    </>
  );
}
