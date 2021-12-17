import React from "react";
import styles from "./Ability.module.css";

export interface AbilityProps {
  title: string;
  p1: string;
}

const Ability: React.FC<AbilityProps> = ({ title, p1 }) => {
  return (
    <div className={styles.ability}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828710.png"
          alt="Изображение к блоку о преимуществах"
        />
      </div>

      <div className={styles.textContainer}>
        <h4>{title}</h4>
        <p>{p1}</p>
      </div>
    </div>
  );
};

export default Ability;
