import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import LocaleSelect from "./LocaleSelect";
import { COURSES, BLOG, SIGNIN, SIGNUP, ABOUT } from "../../../../utils/routes";
import { useRouter } from "next/router";
import MyNavLink from "./MyNavLink";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <MyNavLink href={COURSES} text={"Курсы"} />
        <MyNavLink href={BLOG} text={"Блог"} />
        <MyNavLink href={ABOUT} text={"О нас"} />
        <MyNavLink href={SIGNIN} text={"Войти"} />
        <MyNavLink href={SIGNUP} text={"Регистрация"} />
        <li className={styles.menuListItem}>
          <LocaleSelect />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
