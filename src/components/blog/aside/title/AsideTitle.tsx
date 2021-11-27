import React, { FC } from "react";
import styles from "./AsideTitle.module.css";
interface AsideTitleProps {
  title: string;
}

const AsideTitle: FC<AsideTitleProps> = ({ title }) => {
  return <h3 className={styles.asideTitle}>{title}</h3>;
};

export default AsideTitle;
