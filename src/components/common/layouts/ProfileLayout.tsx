import React, { ReactElement } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ProfileNav from "../../profile/ProfileNav";

const ProfileLayout = ({ children }: any) => {
  return (
    <>
      <div>
        <Header />
        <ProfileNav />
      </div>

      {children}
      <Footer />
    </>
  );
};

export default ProfileLayout;
