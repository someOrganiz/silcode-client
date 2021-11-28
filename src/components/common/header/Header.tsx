import React from "react";
import styles from "./Header.module.css";
import NavBar from "./navbar/NavBar";
import Logo from "./logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
