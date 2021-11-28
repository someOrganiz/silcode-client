import React, { FC } from "react";
import styles from "./MyButton.module.css";

interface ButtonProps {
  text: string;
}

const MyButton: FC<ButtonProps> = ({ text }) => {
  return <button className={styles.myBtn}>{text}</button>;
};

export default MyButton;
