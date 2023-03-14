import Head from "next/head";
import { COMPANY_NAME, URL_GETUSER } from "../../constants/Constants";
import { useEffect, useRef, useState } from "react";
import UserAccount from "../../components/account/UserAccount";
import SignUp from "../../components/account/SignUp";
import Login from "../../components/account/Login";
import axios from "axios";
import { User } from "../../types/user";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/features/slice/userSlice";

export default function Account() {
  const [signUp, setSignUp] = useState(true);
  const [loginStatus, setLoginStatus] = useState<Boolean>(false);
 
  const user: User = useSelector((state: any) => state.user.value);

  const effectRan = useRef(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (effectRan.current === true) {
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
          setLoginStatus(true);
          dispatch(setUser(res.data));
          console.log("test use effect");
        })
        .catch(() =>  localStorage.clear());
    }

    return () => {
      effectRan.current = true;
    };
  }, [dispatch, loginStatus]);

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Compte</title>
      </Head>

      {Object.keys(user).length > 0 || loginStatus  ? (
        <UserAccount setLoginStatus={setLoginStatus} />
      ) : (
        <div className="relative h-full flex justify-center items-center py-10 px-5">
          <div className="border-2 rounded-lg p-5  w-full max-w-[400px]">
            <div className="flex justify-between">
              <button
                className={`underline ${
                  signUp ? `text-main` : `text-gray-300`
                }`}
                onClick={() => setSignUp(true)}
              >
                S&apos;inscrire
              </button>
              <button
                className={`underline ${
                  signUp ? `text-gray-300` : `text-main`
                }`}
                onClick={() => setSignUp(false)}
              >
                Se connecter
              </button>
            </div>
            {signUp ? <SignUp /> : <Login setLoginStatus={setLoginStatus} />}
          </div>
        </div>
      )}
    </>
  );
}
