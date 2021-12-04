import { useRouter } from "next/router";
import React, { SyntheticEvent } from "react";
import { PROFILE, SIGNIN, SIGNUP } from "../../../../../utils/routes";
import styles from "./LocaleSelect.module.css";

const LocaleSelect = () => {
  const router = useRouter();
  const { locale } = router;

  let select;
  if ([SIGNIN, SIGNUP, PROFILE].indexOf(router.pathname) > -1) {
    select = styles.selectkBlack;
  } else select = styles.select;

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className={styles.wrapper}>
      <select
        onChange={changeLanguage}
        defaultValue={locale}
        className={select}
      >
        <option className={styles.option} value="ru">
          RU
        </option>
        <option className={styles.option} value="en">
          EN
        </option>
      </select>
    </div>
  );
};

export default LocaleSelect;
