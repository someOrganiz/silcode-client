import React, { ReactElement } from "react";
import EntryTitle from "../../components/common/entry/EntryTitle";
import EntryWrapper from "../../components/common/entry/EntryWrapper";
import FHLayout from "../../components/common/layouts/HFLayout";
import TitleSpacer from "../../components/common/spacer/TitleSpacer";
import CourseDescription from "../../components/courses/description/CourseDescription";

export default function Python() {
  return (
    <main>
      <EntryWrapper img="/dscience.webp" alt="blog entry image">
        <EntryTitle text="Первооткрыватель Data Science" />
      </EntryWrapper>
      <TitleSpacer title="О Курсе: " />
      {/* <CourseDescription /> */}
    </main>
  );
}

Python.getLayout = function getLayout(page: ReactElement) {
  return <FHLayout>{page}</FHLayout>;
};
