import React, { ReactElement } from "react";
import styles from "../../styles/Profile.module.css";
import CourseCard from "../../components/courses/courseCard/CourseCard";
import { PYTHON } from "../../utils/routes";
import HFLayout from "../../components/common/layouts/HFLayout";

const Profile = () => {
  return (
    <main className={styles.main}>
      <p>Здесь отображаются ваши купленные курсы</p>
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
    </main>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
