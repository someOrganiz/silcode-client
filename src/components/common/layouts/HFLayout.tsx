import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const HFLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HFLayout;
