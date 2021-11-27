import { GetStaticProps } from "next";
import { getCookieParser } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import LocaleSelect from "./LocaleSelect";
import {
  COURSES,
  BLOG,
  CONTACTS,
  SIGNIN,
  SIGNUP,
  ABOUT,
} from "../../../../utils/routes";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.menuListItem}>
          <Link href={COURSES}>
            <a className={styles.menuLink}>Курсы</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href={BLOG}>
            <a className={styles.menuLink}>Блог</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href={ABOUT}>
            <a className={styles.menuLink}>О нас</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href={SIGNIN}>
            <a className={styles.menuLink}>Войти</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href={SIGNUP}>
            <a className={styles.menuLink}>Регистрация</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <LocaleSelect />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
