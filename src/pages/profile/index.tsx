import React, { ReactElement } from "react";
import styles from "../../styles/Profile.module.css";
import CourseCard from "../../components/courses/courseCard/CourseCard";
import { PYTHON } from "../../utils/routes";
import HFLayout from "../../components/common/layouts/HFLayout";
import ProfileNav from "../../components/profile/ProfileNav";
import ProfileLayout from "../../components/common/layouts/ProfileLayout";

const Profile = () => {
  return (
    <main className={styles.main}>
      {/* <ProfileNav /> */}

      <div className={styles.container}>
        <div>
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
        </div>
      </div>
      {/* <div>
        <h2>My trips!</h2>
        <CourseCard
          to={PYTHON}
          tags={["Amazon"]}
          title={"Стажировка в компании Amazon"}
          date={"2 января в 2024"}
          duration={"4 месяца"}
          description={`Стажировка по специальности аналитик данных в подразделение amazon cloud`}
          img={
            "https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png"
          }
          alt={"amazon icon"}
        />
      </div> */}
    </main>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};
