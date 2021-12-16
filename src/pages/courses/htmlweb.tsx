import React, { ReactElement } from "react";
import EntryTitle from "../../components/common/entry/EntryTitle";
import EntryWrapper from "../../components/common/entry/EntryWrapper";
import FHLayout from "../../components/common/layouts/HFLayout";
import TitleSpacer from "../../components/common/spacer/TitleSpacer";
import CourseDescription from "../../components/courses/description/CourseDescription";

export default function HtmlWeb() {
  return (
    <main>
      <EntryWrapper img="/htmlcss.webp" alt="blog entry image">
        <EntryTitle text="Верстка для начинающих" />
      </EntryWrapper>
      <TitleSpacer title="О Курсе: " />
      {/* <CourseDescription /> */}
    </main>
  );
}

HtmlWeb.getLayout = function getLayout(page: ReactElement) {
  return <FHLayout>{page}</FHLayout>;
};
