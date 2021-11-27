import React from "react";
import { useTranslation } from "../../../hooks/myHooks";
import BlogPost from "../post/BlogPost";
import styles from "./BlogPostContainer.module.css";

const BlogPostContainer = () => {
  const { blogPage } = useTranslation();
  return (
    <div className={styles.main}>
      <BlogPost
        tags={["Managment", "IT"]}
        title={blogPage.blogPost1.title}
        date={"1 ноября 2021"}
        author={"Жданов Сергей"}
        description={`В чем суть Agile с точки зрения здравого смысла и пользы для бизнеса?
          Давайте без применения специальных терминов разберёмся, что такое
          Agile, зачем он нужен, из чего состоит и какими инструментами
          добивается ключевых целей.`}
        img={
          "https://cdn.sysaid.com/wp-content/uploads/2021/06/agile700x350.png"
        }
        alt={"Изображение к статье об Agile технологии"}
      />
      <BlogPost
        tags={["Business", "Developing"]}
        title={blogPage.blogPost2.title}
        date={"11 ноября 2021"}
        author={"Андрей Сухоруков"}
        description={`В этой статье мы разберем регламенты работы, которые StaffHub применяет в агентском
          режиме услуги «аренды разработчиков», используя для реализации субподряд, когда услуга предоставляется не силами своих 
          разработчиков, а при помощи создания и развития доверенной партнерской сети с использованием её ресурсов.`}
        img={
          "https://leonardo.osnova.io/9759fbd1-7ccb-5dbf-9d3f-bb1019a4adff/-/preview/1400/"
        }
        alt={
          "Изображение к статье об ответственности в партнерской модели разработки"
        }
      />
      <BlogPost
        tags={["Marketing", "AR"]}
        title={blogPage.blogPost3.title}
        date={"15 декабря 2021"}
        author={"Кристина Шумская"}
        description={`По данным, полученным из отчета “Российский рынок дополненной и виртуальной реальности”, который подготовило 
          аналитическое агентство “ТМТ Консалтинг” совместно с компанией Huawei, возникает понимание того, что российский рынок VR/AR 
          технологий находится на начальной стадии развития.`}
        img={
          "https://leonardo.osnova.io/e6430e3e-f4c0-55fc-8ca4-c3af940f21b4/-/preview/2100/"
        }
        alt={
          "Изображение к статье о состоянии российского рынка AR/VR на 21 год"
        }
      />

      <BlogPost
        tags={["IT", "FUTURE"]}
        title={blogPage.blogPost4.title}
        date={"14 ноября 2021"}
        author={"Смолов Сергей"}
        description={
          "Путин: «Нужно использовать возможности метавселенных для творческих и деловых проектов»."
        }
        img={
          "https://leonardo.osnova.io/9dba3137-d7ab-5091-b0b0-94f95d63f296/-/preview/1800/"
        }
        alt={"Изображение к статье о метавселенной"}
      />

      <BlogPost
        tags={["IT", "Medicine", "Tech"]}
        title={blogPage.blogPost5.title}
        date={"10 октября 2021"}
        author={"Кульков Дмитрий"}
        description={
          "В сегодняшней статье вы узнаете про главные тренды в области здравоохранения."
        }
        img={
          "https://leonardo.osnova.io/0fd476f2-0138-5de2-94d8-854ec66001a1/-/preview/1800/"
        }
        alt={"Изображение к статье о тренды здравоохранения"}
      />

      <BlogPost
        tags={["Business", "IT"]}
        title={blogPage.blogPost6.title}
        date={"10 сентября 2021"}
        author={"Евгения Гаврилина"}
        description={`Цифровизация продолжает набирать обороты: банки внедряют искусственный интеллект, в транспорте и магазинах 
          появилась оплата через Face Pay, а доставка при помощи беспилотников перестала быть чем-то из разряда фантастических фильмов.`}
        img={
          "https://leonardo.osnova.io/9d50f94c-0954-5958-b573-ff195908c46e/-/preview/1800/"
        }
        alt={"Изображение к статье о выборе онлайна"}
      />
    </div>
  );
};

export default BlogPostContainer;
