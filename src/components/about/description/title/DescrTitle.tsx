import React from "react";
import styles from "./DescrTitle.module.css";

interface DescrTitleProps {
  text: string;
}

const DescrTitle: React.FC<DescrTitleProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{text}</h2>
    </div>
  );
};

export default DescrTitle;
