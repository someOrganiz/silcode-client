import React, { ReactElement } from "react";
import FHLayout from "../components/common/layouts/HFLayout";
import CoursesEntry from "../components/courses/entry/CoursesEntry";

const Courses = () => {
  return (
    <main>
      <CoursesEntry />
    </main>
  );
};

export default Courses;

Courses.getLayout = function getLayout(page: ReactElement) {
  return <FHLayout>{page}</FHLayout>;
};
