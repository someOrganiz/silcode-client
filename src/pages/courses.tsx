import React, { ReactElement } from "react";
import EntryTitle from "../components/common/entry/EntryTitle";
import EntryWrapper from "../components/common/entry/EntryWrapper";
import FHLayout from "../components/common/layouts/HFLayout";
import CourseList from "../components/courses/courseList/CourseList";

const Courses = () => {
  return (
    <main>
      <EntryWrapper img="/CoursesPageLangs.webp" alt="blog entry image">
        <EntryTitle text="Лучшие курсы всегда рядом" />
      </EntryWrapper>
      <CourseList />
    </main>
  );
};

export default Courses;

Courses.getLayout = function getLayout(page: ReactElement) {
  return <FHLayout>{page}</FHLayout>;
};
