import React from "react";
import styles from "./Header.module.css";
import NavBar from "./navbar/NavBar";
import Logo from "./logo/Logo";
import { useRouter } from "next/router";
import { PROFILE, SETTINGS, TRIPS } from "../../../utils/routes";
import ProfileNav from "../../profile/ProfileNav";
import router from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <NavBar />
      </div>
      {[PROFILE, SETTINGS, TRIPS].indexOf(router.pathname) > -1 ? (
        <ProfileNav />
      ) : undefined}
      {/* router.pathname === PROFILE ? <ProfileNav /> : undefined} */}
    </header>
  );
};

export default React.memo(Header);
