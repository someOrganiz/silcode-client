import React, { ReactElement } from "react";
import EntryTitle from "../../components/common/entry/EntryTitle";
import EntryWrapper from "../../components/common/entry/EntryWrapper";
import HFLayout from "../../components/common/layouts/HFLayout";
import CourseDescription from "../../components/courses/description/CourseDescription";
import TitleSpacer from "../../components/common/spacer/TitleSpacer";
import Abilities from "../../components/courses/abilities/Abilities";
import styles from "../../components/courses/abilities/Abilities.module.css";
import Ability from "../../components/courses/abilities/ability/Ability";

export default function Python() {
  return (
    <main>
      <EntryWrapper
        img="https://www.filepicker.io/api/file/P1DWTiyMTHeP06UNwYof"
        alt="blog entry image"
      >
        <EntryTitle text="НОВИЧОК В PYTHON РАЗРАБОТКЕ" />
      </EntryWrapper>
      <TitleSpacer title="О Курсе: " />
      <CourseDescription
        title1="Популярность Python быстро растёт"
        p1="Python входит в топ-10 самых востребованных языков программирования
            (по данным Stack Overflow). Он открывает путь в топовые IT-компании:
            Google, Pixar, Youtube, Instagram, Nasa, Intel, Pinterest используют
            именно его."
        p2="После курса вы сможете устроиться в компанию, где создают
            интерактивные веб-сервисы на Python, а таких очень много: 3305
            вакансий для python-разработчика открыто прямо сейчас на hh.ru."
        pay="~ 75 000 ₽"
        payDescr="минимальная зарплата (по данным hh.ru), на которую вы сможете
        претендовать уже после обучения"
        descr=" — простота в освоении и низкий порог входа, читабельность,
            универсальность, большое и активное сообщество. Поэтому Python часто
            советуют в качестве первого языка начинающим программистам"
        title2="Python — самый простой язык для старта"
        titlePros="Сильные стороны языка"
      />

      <div className={styles.abilities}>
        <h2>Чему вы научитесь?</h2>
        <div className={styles.container}>
          <Ability
            title={"Тем, кто хочет начать программировать"}
            p1={
              "Мы подготовили упражнения для начинающих, которые помогут собственными руками написать первые строчки кода и увидеть, как они работают"
            }
          />
          <Ability
            title={"Понимать алгоритмы и структуры данных"}
            p1={
              "Изучите основные алгоритмы и структуры данных и научитесь их реализовывать в Python. Узнаете, как оценивать сложность алгоритмов"
            }
          />

          <Ability
            title={"Создавать программы на Python"}
            p1={
              "Научитесь создавать программы на Python в разных стилях: императивном, объектном и функциональном."
            }
          />

          <Ability
            title={"Работать с сетью"}
            p1={"Поймёте, как устроено клиент-серверное взаимодействие"}
          />

          <Ability
            title={"Тестировать код"}
            p1={
              "Освоите методы отладки и тестирования — сможете находить и исправлять ошибки в своём или чужом коде"
            }
          />
        </div>
      </div>

      {/* <Abilities /> */}
    </main>
  );
}

Python.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
