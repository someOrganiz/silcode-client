import React, { FC } from "react";
import styles from "./EntryTitle.module.css";

interface TitleProps {
  text: string;
}

const EntryTitle: FC<TitleProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{text}</h1>
      </div>
    </div>
  );
};

export default EntryTitle;
