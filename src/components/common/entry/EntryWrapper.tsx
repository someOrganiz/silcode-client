import React, { FC } from "react";
import styles from "./EntryWrapper.module.css";
import { ReactNode } from "react";

interface EntryProps {
  img: string;
  alt: string;
  children: ReactNode;
}

const EntryWrapper: FC<EntryProps> = ({ img, alt, children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <img src={img} alt={alt} className={styles.bgImg} />
    </div>
  );
};

export default EntryWrapper;
