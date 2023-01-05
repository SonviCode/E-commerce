import React from "react";
import Nav from "./Nav";

const Container = (props: any) => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};

export default Container;
