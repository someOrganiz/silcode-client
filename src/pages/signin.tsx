import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import HLayout from "../components/common/layouts/Hlayout";
import SignForm from "../components/sign/form/SignForm";
import { useAppSelector } from "../hooks/redux";
import styles from "../styles/Sign.module.css";
import { HOME } from "../utils/routes";

const SignIn = () => {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.authReducer);

  React.useEffect(() => {
    if (token) {
      router.push(HOME);
    }
  }, []);

  return (
    <main className={styles.main}>
      <SignForm />
    </main>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <HLayout>{page}</HLayout>;
};
