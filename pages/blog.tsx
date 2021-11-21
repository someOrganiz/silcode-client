import { ReactElement } from "react";
import Layout from "../components/layouts/Layout";

import BlogPost from "../components/blog/BlogPost";
import { useTranslation } from "../hooks/myHooks";

export default function Home() {
  const { blogPage } = useTranslation();
  return (
    <div>
      <div>
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
          tags={["Managment", "Скульптура"]}
          title={blogPage.blogPost2.title}
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
