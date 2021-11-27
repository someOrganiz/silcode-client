import Link from "next/link";
import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Link href="#0">
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
