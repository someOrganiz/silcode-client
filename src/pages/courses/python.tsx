import React, { ReactElement } from "react";
import EntryTitle from "../../components/common/entry/EntryTitle";
import EntryWrapper from "../../components/common/entry/EntryWrapper";
import FHLayout from "../../components/common/layouts/HFLayout";
import CoursePython from "../../components/courses/python/CoursePython";
import styles from "../../styles/Course.module.css";

export default function Python() {
  return (
    <main>
      <EntryWrapper
        img="https://www.filepicker.io/api/file/P1DWTiyMTHeP06UNwYof"
        alt="blog entry image"
      >
        <EntryTitle text="НОВИЧОК В PYTHON РАЗРАБОТКЕ" />
      </EntryWrapper>
      <div className={styles.spacer}>
        <h2>О курсе: </h2>
      </div>
      <CoursePython />
    </main>
  );
}

Python.getLayout = function getLayout(page: ReactElement) {
  return <FHLayout>{page}</FHLayout>;
};
