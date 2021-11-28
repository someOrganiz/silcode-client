import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface LayoutProps {
  children: ReactNode;
}

const FHLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default FHLayout;
