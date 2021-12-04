import Link from "next/link";
import React from "react";
import styles from "./Logo.module.css";
import { HOME } from "../../../../utils/routes";

const Logo = () => {
  return (
    <div className={styles.logoContainer} id="1">
      <Link href={HOME}>
        <a>
          <img
            className={styles.logo}
            src="https://static.tildacdn.com/tild6663-6363-4862-b634-636164373461/___-2.png"
            alt="Логотип"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
