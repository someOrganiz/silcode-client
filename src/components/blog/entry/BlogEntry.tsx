import React from "react";
import EntryWrapper from "../../common/entry/EntryWrapper";
import EntryTitle from "../../common/entry/EntryTitle";

const BlogEntry = () => {
  return (
    <EntryWrapper
      img="https://www.netoneasia.com/wp-content/uploads/2019/08/tech-blog.jpg"
      alt="blog entry image"
    >
      <EntryTitle text="Блог о технологиях, программировании и гаджетах" />
    </EntryWrapper>
  );
};

export default BlogEntry;
