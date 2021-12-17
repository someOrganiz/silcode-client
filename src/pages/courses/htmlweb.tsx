import React, { ReactElement } from "react";
import EntryTitle from "../../components/common/entry/EntryTitle";
import EntryWrapper from "../../components/common/entry/EntryWrapper";
import HFLayout from "../../components/common/layouts/HFLayout";
import TitleSpacer from "../../components/common/spacer/TitleSpacer";
import CourseDescription from "../../components/courses/description/CourseDescription";
import styles from "../../styles/Course.module.css";
import Ability from "../../components/courses/abilities/ability/Ability";
import Suitable from "../../components/courses/suit/Suitable";

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

      <div className={styles.suitables}>
        <h2>Кому подойдет курс?</h2>
        <div className={styles.container}>
          <Suitable
            image="https://248006.selcdn.ru/LandGen/desktop_2_8324597e2efaf50fd1f52ad8ae50538cf7f0cc7b15821163457558.webp"
            title="Новичкам"
            p1="Вам не нужно разбираться в математике или иметь опыт в программировании. Шаг за шагом вы научитесь разрабатывать сайты. Начнёте с простых лендингов, а к концу обучения будете знать фреймворки, создавать сложные сервисы и работать в команде."
          />
          <Suitable
            image="https://248006.selcdn.ru/LandGen/desktop_2_f6137b382419ffb2e58e12fbba50a78ea600e86e15821163808598.webp"
            title="Начинающим программистам"
            p1="Превратите программирование из хобби в прибыльную профессию. Освоите продвинутые навыки вёрстки, глубже изучите JavaScript и фреймворки."
          />
          <Suitable
            image="https://248006.selcdn.ru/LandGen/desktop_2_227ecf445249bb751716bda2dae6c03be894783515821163999428.webp"
            title="Фрилансерам без опыта в IT"
            p1="Если вы устали от скучной работы и хотите построить карьеру в IT — курс станет хорошим путеводителем в мир веб-разработки. После обучения у вас будет мощное портфолио, опыт командной работы и все необходимые знания для работы на удалёнке или в крутой команде."
          />
        </div>
      </div>
    </main>
  );
}

HtmlWeb.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
