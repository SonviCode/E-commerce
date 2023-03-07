import Head from "next/head";
import { COMPANY_NAME } from "../../constants/Constants";
import { useEffect, useState } from "react";
import UserAccount from "../../components/account/UserAccount";
import SignUp from "../../components/account/SignUp";
import Login from "../../components/account/Login";
import axios from "axios";

export default function Home() {
  const [signUp, setSignUp] = useState(true);
  const [loginStatus, setLoginStatus] = useState<Boolean>(false);

  // useEffect(() => {

  //   const email: string = e.target.elements.email.value;
  //   const password: string = e.target.elements.password.value;

  //   if (
  //     email != null &&
  //     email.trim() != "" &&
  //     password != null &&
  //     password.trim()
  //   ) {
  //     axios
  //       .post(URL_LOGIN, {
  //         email: email,
  //         password: password,
  //       })
  //       .then((res) => {
  //         console.log(res);

  //         localStorage.setItem(
  //           process.env.NEXT_PUBLIC_USER_ID!,
  //           res.data.userId
  //         ),
  //           localStorage.setItem(
  //             process.env.NEXT_PUBLIC_USER_TOKEN!,
  //             `Bearer ${res.data.token}`
  //           ),
  //           setLoginStatus(true);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  //   if (
  //     localStorage.getItem(process.env.NEXT_PUBLIC_USER_ID!) &&
  //     localStorage.getItem(process.env.NEXT_PUBLIC_USER_TOKEN!) &&
  //     localStorage.getItem(process.env.NEXT_PUBLIC_USER_DATA!)
  //   ) {
  //     setLoginStatus(true);
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>{COMPANY_NAME} - Compte</title>
      </Head>

      {loginStatus ? (
        <UserAccount />
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
