import { ReactElement } from "react";
import HLayout from "../../../components/common/layouts/Hlayout";
import Spoiler from "../../../components/common/spoiler/Spoiler";
import styles from "../../../styles/Learning.module.scss";

const Learning = () => {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <img src="/langLogo/python.png" alt="python img" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus
          amet eius voluptates aliquam quam magnam optio animi eveniet repellat
          rerum quisquam sunt aspernatur eligendi veritatis voluptatibus id, in
          sed!
        </p>
      </div>
      <div className={styles.container}>
        {spoilers.map((spoiler) => (
          <Spoiler
            title={spoiler.title}
            linkToMedia={spoiler.linkToMedia}
            linkToText={spoiler.linkToText}
            key={spoiler.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Learning;

Learning.getLayout = function getLayout(page: ReactElement) {
  return <HLayout>{page}</HLayout>;
};

const spoilers = [
  {
    title: "1. Введение",
    linkToMedia: "Видео",
    linkToText: "Документ",
  },
  {
    title: "2. Переменные",
    linkToMedia: "Видео",
    linkToText: "Документ",
  },
  {
    title: "3. Условные операторы",
    linkToMedia: "Видео",
    linkToText: "Документ",
  },
  {
    title: "4. Циклы",
    linkToMedia: "Видео",
    linkToText: "Документ",
  },
  {
    title: "5. Структуры данных",
    linkToMedia: "Видео",
    linkToText: "Документ",
  },
  {
    title: "6. Алгоритмы",
    linkToMedia: "Видео",
    linkToText: "Документ",
  },
];
