import React from "react";
import styles from "./CourseList.module.css";
import CourseCard from "../courseCard/CourseCard";
import { DSCIENCE, HTMLWEB, PYTHON } from "../../../utils/routes";

const CourseList = () => {
  return (
    <div className={styles.courseList}>
      <div className={styles.courseListHeader}>
        <h2>Наши программы обучения: </h2>
      </div>
      <div className={styles.courseListing}>
        <CourseCard
          to={PYTHON}
          tags={["Python"]}
          title={"Новичок в Python разработке"}
          date={"1 ноября 2021"}
          duration={"4 месяца"}
          description={`Программируйте на языке, который входит в топ 5 востребованных языков программирования`}
          img={
            "https://assets.website-files.com/5f75b134a1a14b3380e06e0e/5f75b134a1a14b5bc5e06f33_Python.svg"
          }
          alt={"Изображение к карточке о языке Python"}
        />
        <CourseCard
          to={HTMLWEB}
          tags={["HTML", "CSS", "Figma", "Canva"]}
          title={"Верстка для начинающих"}
          date={"5 января 2022"}
          duration={"2 месяца"}
          description={`Научитесь красиво верстать сайты, чтобы добавить в этот мир красок!`}
          img={
            "https://assets.website-files.com/5f75b134a1a14b3380e06e0e/5f896d000a9e9f672e49a24e_5f89542adda1cd6b15333d04_Fullstack%2520Javascript.svg"
          }
          alt={"Изображение к карточке о верстке"}
        />
        <CourseCard
          to={DSCIENCE}
          tags={["Python", "Jupyter Notebook"]}
          title={"Новичок в Data Science"}
          date={"15 января 2022"}
          duration={"4 месяца"}
          description={`Научитесь использовать нейросети и машинное обучение для решения бизнес задач`}
          img={
            "https://assets.website-files.com/5f75b134a1a14b3380e06e0e/5f75b134a1a14b43b1e06ea7_flag_small.svg"
          }
          alt={"Изображение к карточке о языке Data Science"}
        />
      </div>
    </div>
  );
};

export default CourseList;
