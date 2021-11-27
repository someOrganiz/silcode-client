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
        description={`В этой статье мы разберем регламенты работы, которые StaffHub применяет в агентском режиме услуги «аренды разработчиков», используя для реализации субподряд, когда услуга предоставляется не силами своих разработчиков, а при помощи создания и развития доверенной партнерской сети с использованием её ресурсов.`}
        img={
          "https://leonardo.osnova.io/9759fbd1-7ccb-5dbf-9d3f-bb1019a4adff/-/preview/1400/"
        }
        alt={
          "Изображение к статье об ответственности в партнерской модели разработки"
        }
      />

      <BlogPost
      
      />
    </div>
  );
};

export default BlogPostContainer;
