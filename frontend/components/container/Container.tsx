import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Container = (props: any) => {
  return (
    <>
      <Nav />
        <main className="grow pt-24 ">{props.children}</main>
      <Footer />
    </>
  );
};

export default Container;
