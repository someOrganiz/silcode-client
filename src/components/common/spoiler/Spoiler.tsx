import styles from "./Spoiler.module.css";
import { FC } from "react";

interface SpoilerProps {
  title: string;
  linkToMedia: string;
  linkToText: string;
}

const Spoiler: FC<SpoilerProps> = ({ title, linkToMedia, linkToText }) => {
  return (
    <div className={styles.main}>
      <details className={styles.details}>
        <summary className={styles.summary}>{title}</summary>
        <ul className={styles.list}>
          <li>{linkToMedia}</li>
          <li>{linkToText}</li>
          <li>Задание</li>
        </ul>
      </details>
    </div>
  );
};

export default Spoiler;
