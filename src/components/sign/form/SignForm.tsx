import React from "react";
import BaseButton from "../../common/button/BaseButton";
import BaseInput from "../../common/input/BaseInput";
import styles from "./SignForm.module.css";
import { useRouter } from "next/router";
import { SIGNIN } from "../../../utils/routes";

interface SignFormProps {
  pseudo?: boolean;
}

const SignForm: React.FC<SignFormProps> = ({ pseudo }) => {
  const router = useRouter();

  return (
    <form
      className={styles.form}
      // onSubmit={handleSubmit}
    >
      {/* {error && <ErrorDiv mes={error} />} */}
      {/* {isLoading && <p>ЗАГРУЗКА</p>} */}
      <div className={styles.wrapper}>
        <p>{router.pathname === SIGNIN ? "Войти" : "Регистрация"}</p>
      </div>

      <BaseInput
        pseudo={pseudo ? 1 : 0}
        type="text"
        name="email"
        placeholder="e-mail"
        // value={credentials.email}
        // onChange={handleChange}
      />
      <BaseInput
        pseudo={pseudo ? 2 : 0}
        type="password"
        name="password"
        placeholder="пароль"
        // value={credentials.password}
        // onChange={handleChange}
      />
      <BaseButton text="Подтвердить" />
    </form>
  );
};

export default SignForm;
