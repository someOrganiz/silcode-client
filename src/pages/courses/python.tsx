import React, { ReactElement } from "react";
import EntryTitle from "../../components/common/entry/EntryTitle";
import EntryWrapper from "../../components/common/entry/EntryWrapper";
import FHLayout from "../../components/common/layouts/HFLayout";
import CourseDescription from "../../components/courses/description/CourseDescription";
import styles from "../../styles/Course.module.css";
import TitleSpacer from "../../components/common/spacer/TitleSpacer";

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
    </main>
  );
}

Python.getLayout = function getLayout(page: ReactElement) {
  return <FHLayout>{page}</FHLayout>;
};
