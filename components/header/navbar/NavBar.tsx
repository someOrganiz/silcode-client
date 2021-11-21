import { GetStaticProps } from "next";
import { getCookieParser } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    const shallow = true;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
      <ul className={styles.nav}>
        <li>
          <Link href="/" locale={locale}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog" locale={locale}>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about" locale={locale}>
            <a>About</a>
          </Link>
        </li>
        <li>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="ru">
              RU
            </option>
            <option className="text-black" value="en">
              EN
            </option>
          </select>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
