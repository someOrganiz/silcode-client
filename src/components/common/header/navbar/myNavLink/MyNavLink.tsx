import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  PROFILE,
  SIGNIN,
  SIGNUP,
  HOME,
  TRIPS,
  SETTINGS,
} from "../../../../../utils/routes";
import styles from "./MyNavLink.module.css";

interface MyNavLinkProps {
  text: string;
  href: string;
}

const MyNavLink: React.FC<MyNavLinkProps> = ({ text, href }) => {
  const router = useRouter();
  let link, underline;
  if (
    [SIGNIN, SIGNUP, PROFILE, SETTINGS, TRIPS].indexOf(router.pathname) > -1
  ) {
    link = styles.menuLinkBlack;
    underline = styles.underlineBlack;
  } else {
    link = styles.menuLink;
    underline = styles.underline;
  }
  if (router.pathname === HOME) {
    underline = "";
  }

  return (
    <li className={styles.menuListItem}>
      <Link href={href}>
        <a className={link}>{text}</a>
      </Link>
      {router.pathname === href ? <div className={underline}></div> : undefined}
    </li>
  );
};

export default MyNavLink;
