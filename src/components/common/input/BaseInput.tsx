import React, { CSSProperties, FC, HTMLAttributes } from "react";
import styles from "./BaseInput.module.css";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  value?: string;
  pseudo?: number;
}

const BaseInput: FC<InputProps> = ({ type, pseudo, ...rest }) => {
  let style;
  if (pseudo)
    switch (pseudo) {
      case 1:
        style = styles.pseudoBlue;
        break;
      case 2:
        style = styles.pseudoKhaki;
        break;
      default:
        style = styles.label;
        break;
    }

  return (
    <label className={style}>
      <span></span>
      <input {...rest} type={type} className={styles.baseInput} required />
    </label>
  );
};

export default BaseInput;
