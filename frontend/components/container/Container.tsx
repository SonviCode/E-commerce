import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsItem } from "../../types/product";
import NotifModal from "../UI/modals/NotifModal";
import Footer from "./Footer";
import Nav from "./Nav";

const Container = (props: any) => {
  const notifData: any = useSelector((state: any) => state.notif.value);

  return (
    <>
      <Nav />
      {notifData.trim() !== "" ? <NotifModal notifName={notifData} /> : ""}
      <main className="grow pt-24 ">{props.children}</main>
      <Footer />
    </>
  );
};

export default Container;
