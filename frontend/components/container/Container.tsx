import React from "react";
import { useSelector } from "react-redux";
import ErrorModal from "../UI/modals/ErrorModal";
import NotifModal from "../UI/modals/NotifModal";
import Footer from "./Footer";
import Nav from "./Nav";

const Container = (props: any) => {
  const notifData: any = useSelector((state: any) => state.notif.value);

  let modal;

  if (notifData == "error") {
    modal = <ErrorModal errorName={notifData} />;
  } else {
    modal = <NotifModal notifName={notifData} />;
  }

  return (
    <>
      <Nav />
      {notifData.trim() !== "" ? modal : ""}
      <main className="grow pt-24 ">{props.children}</main>
      <Footer />
    </>
  );
};

export default Container;
