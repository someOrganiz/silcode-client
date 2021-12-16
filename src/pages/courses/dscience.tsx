import React, { ReactElement } from "react";
import EntryTitle from "../../components/common/entry/EntryTitle";
import EntryWrapper from "../../components/common/entry/EntryWrapper";
import HFLayout from "../../components/common/layouts/HFLayout";
import TitleSpacer from "../../components/common/spacer/TitleSpacer";
import CourseDescription from "../../components/courses/description/CourseDescription";

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
    </main>
  );
}

DScience.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
