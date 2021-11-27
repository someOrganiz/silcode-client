import React from "react";
import EntryWrapper from "../../common/entry/EntryWrapper";
import styles from "./BlogEntry.module.css";
import EntryTitle from "../../common/entry/EntryTitle";

const BlogEntry = () => {
  return (
    <EntryWrapper
      img="https://assets.ithillel.ua/images/blog/cover/_transform_blogSplash_desktop_2x/Hillel-Blog-Cover-Who-Can-Be-Programmer.jpg"
      alt="blog entry image"
    >
      <EntryTitle text="БЛОГ О ТЕХНОЛОГИЯХ, ПРОГРАММИРОВАНИИ И О ГАДЖЕТАХ" />
    </EntryWrapper>
  );
};

export default BlogEntry;
