import React, { ReactElement } from "react";
import Layout from "../components/common/layouts/Layout";

const SignIn = () => {
  return (
    <div className="">
      <div>Вход</div>
    </div>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
