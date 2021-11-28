import React from "react";
import styles from "./DescrArticle.module.css";

interface DescrArticleProps {
  text: string;
  type: number;
}

const DescrArticle: React.FC<DescrArticleProps> = ({ text, type }) => {
  let style;
  switch (type) {
    case 1:
      style = styles.descr;
      break;
    case 2:
      style = styles.descrKhaki;
      break;
    case 3:
      style = styles.descrSecBlue;
      break;
  }

  return (
    <div className={style}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default DescrArticle;
