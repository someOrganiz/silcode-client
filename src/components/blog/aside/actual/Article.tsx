import React, { FC } from "react";
import styles from "./Article.module.css";

interface ArticleProps {
  img: string;
  time: string;
  title: string;
}

const News: FC<ArticleProps> = ({ img, time, title }) => {
  return (
    <article>
      <img src={img} alt="" className={styles.newImg} />
      <div className={styles.new}>
        <time className={styles.newDate}>{time}</time>
        <h4 className={styles.newTitle}>{title}</h4>
      </div>
    </article>
  );
};

export default News;
