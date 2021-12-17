import React, { ReactElement } from "react";
import EntryTitle from "../../components/common/entry/EntryTitle";
import EntryWrapper from "../../components/common/entry/EntryWrapper";
import HFLayout from "../../components/common/layouts/HFLayout";
import TitleSpacer from "../../components/common/spacer/TitleSpacer";
import CourseDescription from "../../components/courses/description/CourseDescription";
import styles from "../../styles/Course.module.css";
import Ability from "../../components/courses/abilities/ability/Ability";
import Suitable from "../../components/courses/suit/Suitable";

export default function DScience() {
  return (
    <main>
      <EntryWrapper img="/dscience.webp" alt="blog entry image">
        <EntryTitle text="Первооткрыватель Data Science" />
      </EntryWrapper>
      <TitleSpacer title="О Курсе: " />
      <CourseDescription
        title1="Data Science - красиво!"
        p1="Специалисты по Data Science работают с Big Data, выдвигают и проверяют гипотезы и помогают бизнесу принимать решения на основе данных. Они создают модели машинного обучения, тренируют нейросети для работы с текстом, видео или изображениями, строят поисковые и рекомендательные системы."
        p2=""
        pay="~ 55 000 ₽"
        payDescr="минимальная зарплата (по данным hh.ru), на которую вы сможете
              претендовать уже после обучения"
        descr=" С нуля освоите Python, SQL, научитесь собирать и анализировать данные, получите необходимый теоретический минимум по математике, теории вероятности и статистике. Знания закрепите на практике — решите задачи на основе реальных кейсов"
        title2="Пройдите обучение по Data Science с нуля и получите востребованную профессию"
        titlePros="Начинающим аналитикам"
      />

      <div className={styles.abilities}>
        <h2>Чему вы научитесь?</h2>
        <div className={styles.container}>
          <Ability
            title={
              "Основы программирования на Python + Python для анализа данных"
            }
            p1={
              "Основы программирования на Python + Анализ данных в Pandas и NumPy. Работа c файлами, HTML-страницами и API"
            }
          />
          <Ability
            title={"Разведывательный анализ данных"}
            p1={
              "Разведывательный анализ с помощью Pandas, Numpy. Основы статистики и проверка статистических гипотез. ML-эксперименты. "
            }
          />

          <Ability
            title={"Подгрузка данных"}
            p1={
              "Выгрузка данных из разных источников с помощью Python. Выгрузка баз данных с помощью SQL. Выбор подходящих данных для решения задач."
            }
          />

          <Ability
            title={"Математика и углубленное машинное обучение"}
            p1={
              "Линейная алгебра. Основы теории вероятности. Основные модели машинного обучения. Оценка качества алгоритмов."
            }
          />

          <Ability
            title={"ML"}
            p1={
              "Задачи классификации, регрессии и кластеризации. Отбор и селекция признаков. Валидация данных. Оптимизация гиперпараметров и улучшение качества модели."
            }
          />
        </div>
      </div>

      <div className={styles.suitables}>
        <h2>Кому подойдет курс?</h2>
        <div className={styles.container}>
          <Suitable
            image="https://248006.selcdn.ru/LandGen/desktop_2_3b9ecd1df00039e329fa8bb42353ae945e34bcae.webp"
            title="Новичкам"
            p1="С нуля освоите Python, SQL, научитесь собирать и анализировать данные, получите необходимый теоретический минимум по математике, теории вероятности и статистике. Знания закрепите на практике — решите задачи на основе реальных кейсов."
          />
          <Suitable
            image="https://248006.selcdn.ru/LandGen/desktop_2_5e672af2a4b64969b0586e18796e857129919880.webp"
            title="Начинающим программистам"
            p1="Подтянете математику, статистику, аналитическое и алгоритмическое мышление, научитесь выявлять потребности бизнеса. Получите опыт работы с моделями машинного обучения, будете применять Python для решения задач с данными."
          />
          <Suitable
            image="https://248006.selcdn.ru/LandGen/desktop_2_c2ce682107ea8965004d75b1ebcee50999d287b5.webp"
            title="Начинающим аналитикам"
            p1="Вы научитесь выдвигать гипотезы и делать выводы на основе данных. Сможете писать эффективный код на Python, превращать сырые данные в полезную информацию для компании, понимать математику на основе статистики, обучать машины и прогнозировать результаты."
          />
        </div>
      </div>
    </main>
  );
}

DScience.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
