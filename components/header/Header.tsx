import React from "react";
import styles from "./Header.module.css";
import NavBar from "./navbar/NavBar";

const Header = () => {
  return (
    <div className={styles.main}>
      <div>header</div>
      <NavBar />
    </div>
  );
};

export default Header;
