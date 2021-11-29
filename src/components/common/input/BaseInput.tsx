import React, { CSSProperties, FC, HTMLAttributes } from "react";
import styles from "./BaseInput.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  value: string;
  pseudo?: number;
  isError?: string;
  isLoading?: any;
}

const BaseInput: FC<InputProps> = ({
  type,
  pseudo,
  isError: isError,
  isLoading,
  ...rest
}) => {
  let style = "";
  if (!isError) {
    style = pseudoStyle(pseudo);
  } else {
    style = errorStyle(pseudo);
  }

  return (
    <label className={style}>
      <span></span>
      <input {...rest} type={type} className={styles.baseInput} required />
    </label>
  );
};

export default BaseInput;

function pseudoStyle(pseudo: number | undefined) {
  if (pseudo)
    switch (pseudo) {
      case 1:
        return styles.pseudo1;
      case 2:
        return styles.pseudo2;
    }
  return "";
}

function errorStyle(pseudo: number | undefined) {
  if (pseudo)
    switch (pseudo) {
      case 1:
        return styles.pseudo1err;
      case 2:
        return styles.pseudo2err;
    }
  return "";
}
