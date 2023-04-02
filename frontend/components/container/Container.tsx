import React from "react";
import { useSelector } from "react-redux";
import NotifModal from "../UI/modals/NotifModal";
import Footer from "./Footer";
import Nav from "./Nav";

const Container = (props: any) => {
  const notifData: any = useSelector((state: any) => state.notif.value);

  return (
    <>
      <Nav />
      {notifData !== "" ? <NotifModal notifName={notifData} /> : ""}
      <main className="grow pt-24 ">{props.children}</main>
      <Footer />
    </>
  );
};

export default Container;
