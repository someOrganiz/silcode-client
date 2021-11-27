import React, { ReactElement } from "react";
import Layout from "../components/common/layouts/Layout";

const Courses = () => {
  return (
    <div>
      <h1>courses</h1>
    </div>
  );
};

export default Courses;

Courses.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
