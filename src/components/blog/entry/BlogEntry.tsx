import React from "react";
import EntryWrapper from "../../common/entry/EntryWrapper";
import EntryTitle from "../../common/entry/EntryTitle";

const BlogEntry = () => {
  return (
    <EntryWrapper img="/BlogPageTech.webp" alt="blog entry image">
      <EntryTitle text="Блог о технологиях, программировании и гаджетах" />
    </EntryWrapper>
  );
};

export default BlogEntry;
