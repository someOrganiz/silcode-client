import React from "react";
import styles from "./Description.module.css";
import DescrArticle from "./article/DescrArticle";
import DescrTitle from "./title/DescrTitle";

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = ({}) => {
  return (
    <div className={styles.container}>
      <DescrTitle text={"Мы молодая информационно-образовательная площадка"} />
      <DescrArticle
        type={1}
        text="Площадка, развивающаяся на
        одном энтузиазме. Наша цель сделать более доступным и
        качественным образование в IT сфере. Несмотря на то, 
				что мы недавно появились, мы быстро набираем обороты."
      />

      <DescrTitle
        text={"Наши учебные материалы одни из самых лучших на рынке"}
      />
      <DescrArticle
        type={2}
        text="Будьте уверены в том, что получите действительно ценные знания,
				необходимые для трудоустройства. Наши занятия всегда затрагивают 
				актуальные тезнологии, способы их применения и их проблемы."
      />

      <DescrTitle text={"Мы есть в социальных сетях"} />
      <DescrArticle
        type={3}
        text="Будем крайне благодарны, если вы подпишетесь на нас
				в любой из социальных сетей. Мы стараемся изо всех сил 
				развивать их, чтобы радовать наших подписчиков не только полезным,
				но и порой забавным контентом."
      />
    </div>
  );
};

export default Description;
