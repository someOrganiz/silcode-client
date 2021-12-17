import React, { ReactElement } from "react";
import EntryTitle from "../../components/common/entry/EntryTitle";
import EntryWrapper from "../../components/common/entry/EntryWrapper";
import HFLayout from "../../components/common/layouts/HFLayout";
import TitleSpacer from "../../components/common/spacer/TitleSpacer";
import CourseDescription from "../../components/courses/description/CourseDescription";
import styles from "../../components/courses/abilities/Abilities.module.css";
import Ability from "../../components/courses/abilities/ability/Ability";

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

      <div className={styles.abilities}>
        <h2>Чему вы научитесь?</h2>
        <div className={styles.container}>
          <Ability
            title={"Верстать сайты правильно"}
            p1={
              "Детально изучите все возможности современного CSS, научитесь верстать адаптивные сайты, которыми удобно пользоваться. Сделаете проекты эстетичнее при помощи анимаций и переходов."
            }
          />
          <Ability
            title={"Работать с современными фреймворками"}
            p1={
              "С помощью фреймворков вы сможете быстрее разрабатывать сложные веб-сервисы, а ещё они эффективнее расходуют ресурсы браузера. Вы сами выбираете, что учить — React или Vue."
            }
          />

          <Ability
            title={"Программировать на JavaScript"}
            p1={
              "Будете проектировать логику работы сайта. Без стресса выучите один из самых популярных языков программирования."
            }
          />

          <Ability
            title={"Работать с Git"}
            p1={
              "Будете сохранять все этапы работы над проектами, чтобы у коллег всегда был доступ к коду, а случайные ошибки можно было исправить в два клика."
            }
          />

          <Ability
            title={"Создавать красоту в команде"}
            p1={
              "Научитесь работать по спринтам и Scrum-методологии. Под руководством тимлида вместе с другими студентами напишете веб-сайт."
            }
          />
        </div>
      </div>
    </main>
  );
}

HtmlWeb.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
