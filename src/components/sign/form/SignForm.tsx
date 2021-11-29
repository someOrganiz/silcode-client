import React, { FormEventHandler } from "react";
import BaseButton from "../../common/button/BaseButton";
import BaseInput from "../../common/input/BaseInput";
import styles from "./SignForm.module.css";
import { useRouter } from "next/router";
import { SIGNIN } from "../../../utils/routes";
import { ICredentials } from "../../../models/ICredentials";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { login, register } from "../../../store/reducers/ActionCreators";
import { authSlice } from "../../../store/reducers/AuthSlice";
interface SignFormProps {
  pseudo?: boolean;
}

const SignForm: React.FC<SignFormProps> = ({ pseudo }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isError, isLoading, user } = useAppSelector(
    (state) => state.authReducer
  );
  const [credentials, setCredentials] = React.useState<ICredentials>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (router.pathname === SIGNIN) {
      dispatch(login(credentials));
    } else {
      dispatch(register(credentials));
    }
  };
  React.useEffect(() => {
    dispatch(authSlice.actions.initialize());
  }, []);

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.enter}>
          <p>{router.pathname === SIGNIN ? "Войти" : "Регистрация"}</p>
        </div>

        <BaseInput
          pseudo={pseudo ? 1 : 0}
          isError={isError}
          type="text"
          name="email"
          placeholder="e-mail"
          value={credentials.email}
          onChange={handleChange}
        />
        <BaseInput
          pseudo={pseudo ? 2 : 0}
          isError={isError}
          type="password"
          name="password"
          placeholder="пароль"
          value={credentials.password}
          onChange={handleChange}
        />
        <BaseButton text="Подтвердить" />
      </form>
      <div className={styles.status}>
        {isError && <div>error</div>}
        {isLoading && <div>loading</div>}
      </div>
    </div>
  );
};

export default SignForm;
