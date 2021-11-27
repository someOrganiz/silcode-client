import React, { ReactElement } from "react";
import Layout from "../components/common/layouts/Layout";

const SignUp = () => {
  return (
    <div>
      <h1>Регистрация</h1>
    </div>
  );
};

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
