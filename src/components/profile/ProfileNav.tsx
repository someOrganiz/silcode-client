import React from "react";
import styles from "./ProfileNav.module.css";
import MyNavLink from "../common/header/navbar/myNavLink/MyNavLink";
import { PROFILE, SETTINGS, TRIPS } from "../../utils/routes";

const ProfileNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <MyNavLink href={PROFILE} text="МОИ КУРСЫ" />
        </li>
        <li>
          <MyNavLink href={TRIPS} text="ПРЕДСТОЯЩИЕ ПОЕЗДКИ" />
        </li>
        <li>
          <MyNavLink href={SETTINGS} text="НАСТРОЙКИ" />
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNav;
