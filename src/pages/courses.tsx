import React, { ReactElement } from "react";
import FHLayout from "../components/common/layouts/HFLayout";
import CoursesEntry from "../components/courses/entry/CoursesEntry";
import CourseList from "../components/courses/courseList/CourseList";

const Courses = () => {
  return (
    <main>
      <CoursesEntry />
      <CourseList />
    </main>
  );
};

export default Courses;

Courses.getLayout = function getLayout(page: ReactElement) {
  return <FHLayout>{page}</FHLayout>;
};
