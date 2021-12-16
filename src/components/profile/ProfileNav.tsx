import React from "react";
import styles from "./ProfileNav.module.css";

const ProfileNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>courses</li>
        <li>trips</li>
        <li>settings</li>
      </ul>
    </nav>
  );
};

export default ProfileNav;
