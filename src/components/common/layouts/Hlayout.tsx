import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface LayoutProps {
  children: ReactNode;
}

const HLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HLayout;
