import React from "react";
import EntryTitle from "../../common/entry/EntryTitle";
import EntryWrapper from "../../common/entry/EntryWrapper";

const CoursesEntry = () => {
  return (
    <EntryWrapper
      img="https://vintaytime.com/wp-content/uploads/2017/01/programming-languages-premium-featured.png"
      alt="blog entry image"
    >
      <EntryTitle text="Лучшие курсы всегда рядом" />
    </EntryWrapper>
  );
};

export default CoursesEntry;
