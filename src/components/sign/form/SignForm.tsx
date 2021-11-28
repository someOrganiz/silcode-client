import React from "react";
import BaseButton from "../../common/button/BaseButton";
import BaseInput from "../../common/input/BaseInput";
import styles from "./SignForm.module.css";

interface SignFormProps {}

const SignForm: React.FC<SignFormProps> = ({}) => {
  return (
    <form
      className={styles.form}
      // onSubmit={handleSubmit}
    >
      {/* {error && <ErrorDiv mes={error} />} */}
      {/* {isLoading && <p>ЗАГРУЗКА</p>} */}
      <BaseInput
        type="text"
        name="email"
        placeholder="логин"
        // value={credentials.email}
        // onChange={handleChange}
      />
      <BaseInput
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
