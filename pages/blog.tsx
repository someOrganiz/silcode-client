import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import Layout from "../components/layouts/Layout";
import styles from "../styles/Home.module.css";
import BlogPost from "../components/blog/BlogPost";

export default function Home() {
  return (
    <div>
      <div>
        <BlogPost
          tags={["Managment", "IT"]}
          title={"Что такое Agile-подход и зачем он нужен бизнесу?"}
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
          tags={["Managment", "Скульптура"]}
          title={"Совсем другая статья"}
          date={"1 ноября 3023"}
          author={"Андрей сухоруков"}
          description={`В чем суть Agile с точки зрения здравого смысла и пользы для бизнеса?
          Давайте без применения специальных терминов разберёмся, что такое
          Agile, зачем он нужен, из чего состоит и какими инструментами
          добивается ключевых целей.`}
          img={
            "https://cdn.sysaid.com/wp-content/uploads/2021/06/agile700x350.png"
          }
          alt={"Изображение к статье об Agile технологии"}
        />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
