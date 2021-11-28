import React, { ReactElement } from "react";
import HLayout from "../components/common/layouts/Hlayout";
import SignForm from "../components/sign/form/SignForm";
import styles from "../styles/Sign.module.css";

const SignIn = () => {
  return (
    <main className={styles.main}>
      {/* <PseSignForm /> */}
      <SignForm pseudo={true} />
    </main>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <HLayout>{page}</HLayout>;
};
