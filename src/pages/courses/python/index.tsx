import React, { ReactElement } from "react";
import EntryTitle from "../../../components/common/entry/EntryTitle";
import EntryWrapper from "../../../components/common/entry/EntryWrapper";
import HFLayout from "../../../components/common/layouts/HFLayout";
import CourseDescription from "../../../components/courses/description/CourseDescription";
import TitleSpacer from "../../../components/common/spacer/TitleSpacer";
import Suitables from "../../../components/courses/suit/Suitables";
import Abilities from "../../../components/courses/abilities/Abilities";

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

      <Abilities propsList={abilitiesProps} />
      <Suitables propsList={suitablesProps} />
    </main>
  );
}

Python.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};

const abilitiesProps = [
  {
    title: "Тем, кто хочет начать программировать",
    p1: "Мы подготовили упражнения для начинающих, которые помогут собственными руками написать первые строчки кода и увидеть, как они работают",
  },
  {
    title: "Понимать алгоритмы и структуры данных",
    p1: "Изучите основные алгоритмы и структуры данных и научитесь их реализовывать в Python. Узнаете, как оценивать сложность алгоритмов",
  },

  {
    title: "Создавать программы на Python",
    p1: "Научитесь создавать программы на Python в разных стилях: императивном, объектном и функциональном.",
  },

  {
    title: "Работать с сетью",
    p1: "Поймёте, как устроено клиент-серверное взаимодействие",
  },

  {
    title: "Тестировать код",
    p1: "Освоите методы отладки и тестирования — сможете находить и исправлять ошибки в своём или чужом коде",
  },
];

const suitablesProps = [
  {
    image:
      "https://248006.selcdn.ru/LandGen/desktop_2_3d143049f0bc17f091b13026b78e5ee4300cea14.webp",
    title: "Тем, кто хочет начать программировать",
    p1: "Мы подготовили упражнения для начинающих, которые помогут собственными руками написать первые строчки кода и увидеть, как они работают",
  },
  {
    image:
      "https://248006.selcdn.ru/LandGen/desktop_2_aaf65fe3a8d1e20c04b39efdaea8b7febbaedd23.webp",
    title: "Начинающим Python-разработчикам",
    p1: "Вы систематизируете и углубите знания по Python, освоите продвинутые темы и прокачаетесь как разработчик",
  },
  {
    image:
      "https://248006.selcdn.ru/LandGen/desktop_2_74d0106de51916ae9879f86069e4180209a4338b.webp",
    title: "Специалистам в сфере IT",
    p1: "Вы освоите Python и сможете автоматизировать рутинные задачи, расширите круг компетенций и повысите свою ценность как специалиста",
  },
  {
    image:
      "https://248006.selcdn.ru/LandGen/desktop_2_fbe68bf7a8eed788abd0200fe12fa40ed18713e8.webp",
    title: "Разработчикам на других языках",
    p1: "Вы разберётесь в особенностях Python, сможете сменить специальность и разрабатывать на одном из самых востребованных и простых языков",
  },
];
