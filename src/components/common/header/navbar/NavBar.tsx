import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import LocaleSelect from "./LocaleSelect";
import { COURSES, BLOG, SIGNIN, SIGNUP, ABOUT } from "../../../../utils/routes";
import { useRouter } from "next/router";

const NavBar = () => {
  // я не придумал ничего лучше
  const router = useRouter();
  let link;
  if (router.pathname == SIGNIN || router.pathname == SIGNUP) {
    link = styles.menuLinkBlack;
  } else link = styles.menuLink;
  // ------------------------------
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.menuListItem}>
          <Link href={COURSES}>
            <a className={link}>Курсы</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href={BLOG}>
            <a className={link}>Блог</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href={ABOUT}>
            <a className={link}>О нас</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href={SIGNIN}>
            <a className={link}>Войти</a>
          </Link>
        </li>
        <li className={styles.menuListItem}>
          <Link href={SIGNUP}>
            <a className={link}>Регистрация</a>
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
