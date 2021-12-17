import React, { ReactElement } from "react";
import styles from "../../styles/Profile.module.css";
import CourseCard from "../../components/courses/courseCard/CourseCard";
import { PYTHON } from "../../utils/routes";
import HFLayout from "../../components/common/layouts/HFLayout";

const Trips = () => {
  return (
    <main className={styles.main}>
      <p>Здесь отображаются ваши предстоящие поездки</p>
      <div className={styles.container}>
        <CourseCard
          to={PYTHON}
          tags={["Amazon"]}
          title={"Стажировка в компании Amazon"}
          date={"2 января в 2024"}
          duration={"4 месяца"}
          description={`Стажировка по специальности аналитик данных в подразделение amazon cloud`}
          img={"/icons/amazon.jpeg"}
          alt={"amazon icon"}
        />
      </div>
    </main>
  );
};

export default Trips;

Trips.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
