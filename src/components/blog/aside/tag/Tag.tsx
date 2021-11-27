import React, { FC } from "react";
import styles from "./Tag.module.css";

interface TagProps {
  theme: string;
}

const Tag: FC<TagProps> = ({ theme }) => {
  return (
    <li className={styles.tagItem}>
      <a href="#0" className={styles.tagLink}>
        {theme}
      </a>
    </li>
  );
};

export default Tag;
