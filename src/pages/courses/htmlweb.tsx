import React, { ReactElement } from "react";
import EntryTitle from "../../components/common/entry/EntryTitle";
import EntryWrapper from "../../components/common/entry/EntryWrapper";
import HFLayout from "../../components/common/layouts/HFLayout";
import TitleSpacer from "../../components/common/spacer/TitleSpacer";
import CourseDescription from "../../components/courses/description/CourseDescription";

export default function HtmlWeb() {
  return (
    <main>
      <EntryWrapper img="/htmlcss.webp" alt="blog entry image">
        <EntryTitle text="Джуниор в Frontend - разработке" />
      </EntryWrapper>
      <TitleSpacer title="О Курсе: " />
      <CourseDescription
        title1="Эй! Посмотри на меня! "
        p1="Frontend-разработчик отвечает за внешний вид сайта или мобильного приложения: он верстает шаблоны, красиво оформляет текст и изображения, улучшает взаимодействие пользователя с интерфейсом. Без frontend-разработчика не получится создать удобный цифровой продукт."
        p2="Главная задача - привлечь ВАШЕ ВНИМАНИЕ!"
        pay="~ 55 000 ₽"
        payDescr="минимальная зарплата (по данным hh.ru), на которую вы сможете
        претендовать уже после обучения"
        descr=" Поможем перейти в перспективное направление, чтобы заниматься любимым делом и больше зарабатывать"
        title2="Вы получите новый опыт работы с HTML, CSS, JavaScript, ReactJS, Node.js"
        titlePros="Начинающим 
        веб-разработчикам"
      />
    </main>
  );
}

HtmlWeb.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
