import { useRouter } from "next/router";
import React from "react";
import styles from "./LocaleSelect.module.css";

const LocaleSelect = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select
      onChange={changeLanguage}
      defaultValue={locale}
      className={styles.select}
    >
      <option className={styles.option} value="ru">
        RU
      </option>
      <option className={styles.option} value="en">
        EN
      </option>
    </select>
  );
};

export default LocaleSelect;
