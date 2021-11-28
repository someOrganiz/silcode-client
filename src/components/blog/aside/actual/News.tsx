import React, { FC } from "react";
import styles from "./News.module.css";

interface ArticleProps {
  img: string;
  time: string;
  title: string;
  alt: string;
}

const News: FC<ArticleProps> = ({ img, alt, time, title }) => {
  return (
    <article className={styles.news}>
      <img src={img} alt={alt} className={styles.newImg} />
      <div className={styles.new}>
        <time className={styles.newDate}>{time}</time>
        <h4 className={styles.newTitle}>{title}</h4>
      </div>
    </article>
  );
};

export default News;
