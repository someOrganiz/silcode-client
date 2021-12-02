import React from "react";
import styles from "./TopArticle.module.css";

interface TopArticleProps {
  title: string;
  p1: string;
  p2: string;
  pay: string;
  payDescr: string;
}

const TopArticle: React.FC<TopArticleProps> = ({
  p1,
  p2,
  pay,
  payDescr,
  title,
}) => {
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.description}>
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
      </div>

      <div className={styles.paySection}>
        <div className={styles.pay}>
          <h2>{pay}</h2>
        </div>
        <div className={styles.payDescr}>
          <p>{payDescr}</p>
        </div>
      </div>
    </article>
  );
};

export default TopArticle;
