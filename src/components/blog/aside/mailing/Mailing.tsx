import React from "react";
import MyButton from "../../../common/button/MyButton";
import AsideTitle from "../title/AsideTitle";
import styles from "./Mailing.module.css";

const Mailing = () => {
  return (
    <div>
      <AsideTitle title={"Рассылка"} />
      <form className={styles.emailTitle}>
        <label>
          {/* <span className={styles.visuallyHidden}>Поле для ввода e-mail</span> */}
          <input
            className={styles.emailField}
            type="email"
            placeholder={"Ваш email-адрес"}
            required
          />
        </label>
        <MyButton text={"Подписаться"} />
      </form>
    </div>
  );
};

export default Mailing;
