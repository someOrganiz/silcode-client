import React from "react";
import News from "./News";
import styles from "./Actual.module.css";
import AsideTitle from "../title/AsideTitle";

const Actual = () => {
  return (
    <section className={styles.section}>
      <AsideTitle title={"Актуальное"} />
      {/* <h3 className={styles.asideTitle}>Актуальное</h3> */}
      <News
        img={
          "https://leonardo.osnova.io/8f349a93-a6a1-52b5-a4f1-ff62a7494ce1/-/preview/1800/"
        }
        alt={"Изображение к статье об SEO и чеклисте"}
        title={"Составляем чек-лист для SEO-специалиста"}
        time={"14 октября 2021"}
      />

      <News
        img={
          "https://leonardo.osnova.io/03eafcc3-6bad-5c85-9539-2c97554b38b6/-/preview/1800/"
        }
        alt={"Изображение к сатье о продвижении сайта на конструкторе"}
        title={"Продвигаем сайт на конструкторе"}
        time={"11 октября 2021"}
      />

      <News
        img={
          "https://leonardo.osnova.io/d71e789a-6244-5673-9731-b7cb993a6ca0/-/preview/2100/"
        }
        alt={"Изображение к статье о рынке микросхем"}
        title={"Рынок полупроводников вырастет на 17,3 %"}
        time={"20 октября 2021"}
      />

      <News
        img={
          "https://leonardo.osnova.io/75c3d55b-0529-5b8b-9316-133faf13ae86/-/preview/1800/"
        }
        alt={"Изображение к статье о дизайнерских интерфейсах"}
        title={"Новые вызовы для дизайнеров интерфейсов"}
        time={"13 ноября 2021"}
      />
    </section>
  );
};

export default Actual;
