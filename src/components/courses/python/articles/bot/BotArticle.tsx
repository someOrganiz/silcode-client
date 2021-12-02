import React from "react";
import styles from "./BotArticle.module.css";

interface BotArticleProps {
  title: string;
  titlePros: string;
  descr: string;
}

const BotArticle: React.FC<BotArticleProps> = ({ descr, title, titlePros }) => {
  return (
    <article className={styles.article}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div>
        <div className={styles.titlePros}>
          <h2>{titlePros}</h2>
        </div>
        <div className={styles.description}>
          <p>{descr}</p>
        </div>
      </div>
    </article>
  );
};

export default BotArticle;
