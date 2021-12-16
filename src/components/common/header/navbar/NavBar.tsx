import React from "react";
import styles from "./NavBar.module.css";
import LocaleSelect from "./localeSelect/LocaleSelect";
import {
  COURSES,
  BLOG,
  SIGNIN,
  SIGNUP,
  ABOUT,
  PROFILE,
} from "../../../../utils/routes";
import MyNavLink from "./myNavLink/MyNavLink";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { auth, logout } from "../../../../store/reducers/ActionCreators";
import { HOME } from "../../../../utils/routes";

const NavBar = () => {
  console.log("rendered");
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
                <MyNavLink href={HOME} text={"Выход"} />
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
