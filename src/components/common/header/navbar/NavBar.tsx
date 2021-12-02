import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import LocaleSelect from "./LocaleSelect";
import {
  COURSES,
  BLOG,
  SIGNIN,
  SIGNUP,
  ABOUT,
  PROFILE,
  HOME,
} from "../../../../utils/routes";
import MyNavLink from "./MyNavLink";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { auth, logout } from "../../../../store/reducers/ActionCreators";
import { authSlice } from "../../../../store/reducers/AuthSlice";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const { isLoading, token } = useAppSelector((state) => state.authReducer);

  React.useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <nav>
      {isLoading ? (
        <></>
      ) : (
        <ul className={styles.list}>
          <MyNavLink href={COURSES} text={"Курсы"} />
          <MyNavLink href={BLOG} text={"Блог"} />
          <MyNavLink href={ABOUT} text={"О нас"} />
          {token ? (
            <>
              <MyNavLink href={PROFILE} text={"Профиль"} />
              <div onClick={(e) => dispatch(logout())}>
                <MyNavLink href={""} text={"Выход"} />
              </div>
            </>
          ) : (
            <>
              <MyNavLink href={SIGNIN} text={"Войти"} />
              <MyNavLink href={SIGNUP} text={"Регистрация"} />
            </>
          )}
          <li className={styles.menuListItem}>
            <LocaleSelect />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
