import React from "react";
import { useAppSelector } from "../../hooks/redux";
import styles from "./Header.module.css";
import NavBar from "./navbar/NavBar";
import { userSlice } from "../../store/reducers/UserSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const { count } = useAppSelector((state) => state.userReducer);
  const { increment } = userSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <div>header</div>
      <NavBar />
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>increment</button>
    </div>
  );
};

export default Header;
