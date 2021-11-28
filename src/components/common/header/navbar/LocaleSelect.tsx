import { useRouter } from "next/router";
import React from "react";
import { SIGNIN, SIGNUP } from "../../../../utils/routes";
import styles from "./LocaleSelect.module.css";

const LocaleSelect = () => {
  const router = useRouter();
  const { locale } = router;
  // я не придумал ничего лучше
  let select;
  if (router.pathname == SIGNIN || router.pathname == SIGNUP) {
    select = styles.selectkBlack;
  } else select = styles.select;
  // ------------------------------
  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select onChange={changeLanguage} defaultValue={locale} className={select}>
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
