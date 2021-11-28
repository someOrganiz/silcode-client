import React from "react";
import Tag from "./Tag";
import styles from "./TagContainer.module.css";
import AsideTitle from "../title/AsideTitle";

const TagContainer = () => {
  return (
    <section>
      <AsideTitle title={"Теги"} />
      <ul className={styles.tags}>
        <Tag theme={"IT"} />
        <Tag theme={"WEB-DESIGN"} />
        <Tag theme={"MANGMENT"} />
        <Tag theme={"AR"} />
        <Tag theme={"DEVELOPING"} />
        <Tag theme={"FUTURE"} />
        <Tag theme={"MARKETING"} />
      </ul>
    </section>
  );
};

export default TagContainer;
