import React from "react";
import styles from "./CoursePython.module.css";

interface CoursePythonProps {}

const CoursePython: React.FC<CoursePythonProps> = ({}) => {
  return (
    <main className={styles.main}>
      <div className={styles.descriptionCourse}>
        <div className={styles.descriptionCourseItem}>
          <div className={styles.descriptionCourseItemLeft}>
            <div className={styles.descriptionCourseItemLeftHeader}>
              <h2>Популярность Python быстро растёт</h2>
            </div>
            <div className={styles.descriptionCourseItemLeftMain}>
              <p>
                Python входит в топ-10 самых востребованных языков
                программирования (по данным Stack Overflow). Он открывает путь в
                топовые IT-компании: Google, Pixar, Youtube, Instagram, Nasa,
                Intel, Pinterest используют именно его.
              </p>
              <p>
                После курса вы сможете устроиться в компанию, где создают
                интерактивные веб-сервисы на Python, а таких очень много: 3305
                вакансий для python-разработчика открыто прямо сейчас на hh.ru.
              </p>
            </div>
          </div>

          <div className={styles.descriptionCourseItemRight}>
            <div className={styles.descriptionCourseItemRightHeader}>
              <h2>~ 75 000 ₽</h2>
            </div>
            <div className={styles.descriptionCourseItemRightMain}>
              <p>
                минимальная зарплата (по данным hh.ru), на которую вы сможете
                претендовать уже после обучения
              </p>
            </div>
          </div>
        </div>

        <div className={styles.descriptionCourseItem}>
          <div className={styles.descriptionCourseItemLeft}>
            <div className={styles.descriptionCourseItemLeftHeader}>
              <h2>Python — самый простой язык для старта</h2>
            </div>
          </div>
          <div className={styles.descriptionCourseItemRight}>
            <div className={styles.descriptionCourseItemRightHeader}>
              <h2>Сильные стороны языка</h2>
            </div>
            <div className={styles.descriptionCourseItemRightMain}>
              <p>
                {" "}
                — простота в освоении и низкий порог входа, читабельность,
                универсальность, большое и активное сообщество. Поэтому Python
                часто советуют в качестве первого языка начинающим программистам
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePython;
