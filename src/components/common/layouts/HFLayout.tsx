import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const FHLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default FHLayout;