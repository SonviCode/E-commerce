import React from "react";
import { useSelector } from "react-redux";
import NotifModal from "../UI/modals/NotifModal";
import Footer from "./Footer";
import Nav from "./Nav";
import { RootState } from "../../store/store";

const Container = (props: any) => {
  const notifMessage: string = useSelector((state: RootState) => state.notif.value);

  return (
    <>
      <Nav />
      {notifMessage !== "" ? <NotifModal notifMessage={notifMessage} /> : ""}
      <main className="grow pt-24 ">{props.children}</main>
      <Footer />
    </>
  );
};

export default Container;
