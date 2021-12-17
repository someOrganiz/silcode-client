import React from "react";
import styles from "./ProfileNav.module.css";
import MyNavLink from "../common/header/navbar/myNavLink/MyNavLink";
import { PROFILE, SETTINGS, TRIPS } from "../../utils/routes";

const ProfileNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <MyNavLink href={PROFILE} text="МОИ КУРСЫ" />
        <MyNavLink href={TRIPS} text="ПРЕДСТОЯЩИЕ ПОЕЗДКИ" />
        <MyNavLink href={SETTINGS} text="НАСТРОЙКИ" />
      </ul>
    </nav>
  );
};

export default ProfileNav;
