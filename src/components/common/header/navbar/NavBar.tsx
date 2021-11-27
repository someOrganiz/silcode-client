import { GetStaticProps } from "next";
import { getCookieParser } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import LocaleSelect from "./LocaleSelect";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.menuListItem}>
          <Link href="/">
            <a className={styles.menuLink}>Курсы</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href="/">
            <a className={styles.menuLink}>Блог</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href="/">
            <a className={styles.menuLink}>Контакты</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href="/">
            <a className={styles.menuLink}>Войти</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href="/">
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
