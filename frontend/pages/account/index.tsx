import Head from "next/head";
import { COMPANY_NAME, URL_GETUSER } from "../../constants/Constants";
import { useEffect, useRef } from "react";
import UserAccount from "../../components/account/UserAccount";
import axios from "axios";
import { User } from "../../types/user";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/features/slice/userSlice";
import ConnectModal from "../../components/account/ConnectModal";

export default function Account() {
  const user: User = useSelector((state: any) => state.user.value);

  const effectRan = useRef(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (effectRan.current === false) {
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
          dispatch(setUser(res.data));
        })
        .catch(() => localStorage.clear());
    }

    return () => {
      effectRan.current = true;
    };
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Compte</title>
      </Head>

      {Object.keys(user).length > 0 ? (
        <UserAccount />
      ) : (
        <div className=" p-10">
          <ConnectModal />
        </div>
      )}
    </>
  );
}
