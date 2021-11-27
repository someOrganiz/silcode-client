import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import styles from "./Header.module.css";
import NavBar from "./navbar/NavBar";
import { userSlice } from "../../../store/reducers/UserSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>header</div>
      <NavBar />
    </header>
  );
};

export default Header;
