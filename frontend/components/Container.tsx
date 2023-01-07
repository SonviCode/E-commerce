import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Container = (props: any) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer/>
    </>
  );
};

export default Container;
