import React, { FC } from "react";
import AdvantagesCard from "./AdvantageCard";
import styles from "./AdvantageSection.module.css";

const AdvantageSection: FC = () => {
  return (
    <section className={styles.container}>
      <AdvantagesCard
        img={"/homePage/peopleZoom.jpg"}
        h3={"Занятия с преподавателями"}
        text={
          "Уроки ведут практикующие специалисты с опытом в разработке языков программирования."
        }
        alt=""
      />
      <AdvantagesCard
        img={"/homePage/notebookIMG.jpeg"}
        h3={"Практические задания"}
        text={
          "Следите за задачами, над которыми вы ежедневно работаете и анализируйте Ваши достижения, доводя их до совершенства каждую секунду!"
        }
        alt=""
      />
      <AdvantagesCard
        img={"/homePage/videoConf.png"}
        h3={"Коммуникация с наставником"}
        text={
          "Онлайн-дискуссии и чат с преподавателем позволяют Вам коммуницировать и всегда отвечать на Ваши вопросы."
        }
        alt=""
      />
    </section>
  );
};

export default AdvantageSection;
