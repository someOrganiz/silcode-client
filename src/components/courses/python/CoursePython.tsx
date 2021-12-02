import React from "react";
import BotArticle from "./articles/bot/BotArticle";
import TopArticle from "./articles/top/TopArticle";
import styles from "./CoursePython.module.css";

interface CoursePythonProps {}

const CoursePython: React.FC<CoursePythonProps> = ({}) => {
  return (
    <div className={styles.descriptionCourse}>
      <TopArticle
        title="Популярность Python быстро растёт"
        p1="            Python входит в топ-10 самых востребованных языков программирования
            (по данным Stack Overflow). Он открывает путь в топовые IT-компании:
            Google, Pixar, Youtube, Instagram, Nasa, Intel, Pinterest используют
            именно его."
        p2="После курса вы сможете устроиться в компанию, где создают
            интерактивные веб-сервисы на Python, а таких очень много: 3305
            вакансий для python-разработчика открыто прямо сейчас на hh.ru."
        pay="~ 75 000 ₽"
        payDescr="минимальная зарплата (по данным hh.ru), на которую вы сможете
        претендовать уже после обучения"
      />
      <BotArticle
        descr=" — простота в освоении и низкий порог входа, читабельность,
            универсальность, большое и активное сообщество. Поэтому Python часто
            советуют в качестве первого языка начинающим программистам"
        title="Python — самый простой язык для старта"
        titlePros="Сильные стороны языка"
      />
    </div>
  );
};

export default CoursePython;
