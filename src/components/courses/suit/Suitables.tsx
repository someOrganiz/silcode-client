import React from "react";
import styles from "./Suitables.module.css";
import Suitable from "./suitable/Suitable";
import { SuitableProps } from "./suitable/Suitable";

interface SuitablesProps {
  propsList: SuitableProps[];
}

const Suitables: React.FC<SuitablesProps> = ({ propsList }) => {
  return (
    <div className={styles.suitables}>
      <h2>Кому подойдет курс?</h2>
      <div className={styles.container}>
        {propsList.map((element) => (
          <Suitable
            image={element.image}
            p1={element.p1}
            title={element.title}
            key={element.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Suitables;
