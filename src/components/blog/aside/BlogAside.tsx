import React from "react";
import TagContainer from "./tag/TagContainer";
import styles from "./BlogAside.module.css";
import Actual from "./actual/Actual";
import Mailing from "./mailing/Mailing";

const BlogAside = () => {
  return (
    <aside className={styles.aside}>
      <TagContainer />
      <Actual />
      <Mailing />
    </aside>
  );
};

export default BlogAside;
