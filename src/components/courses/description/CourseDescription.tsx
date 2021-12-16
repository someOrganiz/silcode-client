import React from "react";
import BotArticle from "./articles/bot/BotArticle";
import TopArticle from "./articles/top/TopArticle";
import styles from "./CourseDescription.module.css";

interface CourseDescriptionProps {
  title1: string;
  p1: string;
  p2: string;
  pay: string;
  payDescr: string;
  descr: string;
  title2: string;
  titlePros: string;
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({
  title1,
  p1,
  p2,
  pay,
  payDescr,
  title2,
  descr,
  titlePros,
}) => {
  return (
    <div className={styles.descriptionCourse}>
      <TopArticle
        title={title1}
        p1={p1}
        p2={p2}
        pay={pay}
        payDescr={payDescr}
      />
      <BotArticle descr={descr} title={title2} titlePros={titlePros} />
    </div>
  );
};

export default CourseDescription;
