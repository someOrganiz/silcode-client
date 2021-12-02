import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PROFILE, SIGNIN, SIGNUP } from "../../../../utils/routes";
import styles from "./MyNavLink.module.css";
import { useAppDispatch } from "../../../../hooks/redux";
import { logout } from "../../../../store/reducers/ActionCreators";

interface MyNavLinkProps {
  text: string;
  href: string;
}

const MyNavLink: React.FC<MyNavLinkProps> = ({ text, href }) => {
  const router = useRouter();
  let link, underline;
  if ([SIGNIN, SIGNUP, PROFILE].indexOf(router.pathname) > -1) {
    link = styles.menuLinkBlack;
    underline = styles.underlineBlack;
  } else {
    link = styles.menuLink;
    underline = styles.underline;
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
