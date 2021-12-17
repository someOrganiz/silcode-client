import React from "react";
import styles from "./Abilities.module.css";
import Ability from "./ability/Ability";
import { AbilityProps } from "./ability/Ability";

interface AbilitiesProps {
  propsList: AbilityProps[];
}

const Abilities: React.FC<AbilitiesProps> = ({ propsList }) => {
  return (
    <div className={styles.abilities}>
      <h2>Чему вы научитесь?</h2>
      <div className={styles.container}>
        {propsList.map((element) => (
          <Ability p1={element.p1} title={element.title} key={element.title} />
        ))}
      </div>
    </div>
  );
};

export default Abilities;
