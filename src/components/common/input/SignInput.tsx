import React, { CSSProperties, FC, HTMLAttributes } from "react";
import styles from "./SignInput.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  value: string;
  pseudoStyleType: number;
  isError: string;
  isLoading?: any;
}

const SignInput: FC<InputProps> = ({
  type,
  pseudoStyleType,
  isError: isError,
  isLoading,
  ...rest
}) => {
  let style = addStyle(pseudoStyleType, isError);

  return (
    <label className={style}>
      <span></span>
      <input {...rest} type={type} className={styles.baseInput} required />
    </label>
  );
};

export default SignInput;

function addStyle(pseudo: number, isError: string) {
  let style = isError ? errorStyle(pseudo) : pseudoStyle(pseudo);
  return style;
}

function pseudoStyle(pseudo: number) {
  switch (pseudo) {
    case 1:
      return styles.pseudo1;
    case 2:
      return styles.pseudo2;
  }
  return "";
}

function errorStyle(pseudo: number) {
  switch (pseudo) {
    case 1:
      return styles.pseudo1err;
    case 2:
      return styles.pseudo2err;
  }
  return "";
}
