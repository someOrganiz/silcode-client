import React from "react";
import styles from "./DescrArticle.module.scss";

interface DescrArticleProps {
  text: string;
  type: number;
}

const DescrArticle: React.FC<DescrArticleProps> = ({ text, type }) => {
  let style;
  switch (type) {
    case 1:
      style = styles.descr1;
      break;
    case 2:
      style = styles.descr2;
      break;
    case 3:
      style = styles.descr3;
      break;
  }

  return (
    <div className={style}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default DescrArticle;
