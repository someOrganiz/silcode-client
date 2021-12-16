import React from "react";
import styles from "./TitleSpacer.module.css";

interface TitleSpacerProps {
  title: string;
}

const TitleSpacer: React.FC<TitleSpacerProps> = ({ title }) => {
  return (
    <div className={styles.spacer}>
      <h2>{title}</h2>
    </div>
  );
};

export default TitleSpacer;
