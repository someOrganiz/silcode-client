import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const HLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HLayout;
