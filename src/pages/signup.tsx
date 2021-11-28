import React, { ReactElement } from "react";
import HLayout from "../components/common/layouts/Hlayout";
import SignForm from "../components/sign/form/SignForm";
import styles from "../styles/Sign.module.css";

const SignUp = () => {
  return (
    <main className={styles.main}>
      <SignForm pseudo={true} />
    </main>
  );
};

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <HLayout>{page}</HLayout>;
};
