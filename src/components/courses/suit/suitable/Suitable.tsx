import React from "react";
import styles from "./Suitable.module.css";

export interface SuitableProps {
  title: string;
  p1: string;
  image: string;
}

const Suitable: React.FC<SuitableProps> = ({ title, p1, image }) => {
  return (
    <div className={styles.suitable}>
      <div className={styles.textContainer}>
        <h4>{title}</h4>
        <p>{p1}</p>
      </div>
      <div className={styles.imgContainer}>
        <img src={image} alt="Изображение к блоку о преимуществах" />
      </div>
    </div>
  );
};

export default Suitable;
