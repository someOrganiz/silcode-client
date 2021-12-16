import { FC } from "react";
import styles from "./AdvantageCard.module.css";

interface CardProps {
  img: string;
  h3: string;
  text: string;
  alt: string;
}

const AdvantagesCard: FC<CardProps> = ({ img, h3, text, alt }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles.textContainer}>
        <h3>{h3}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default AdvantagesCard;
