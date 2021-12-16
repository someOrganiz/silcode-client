import Link from "next/link";
import React from "react";
import styles from "./Abilities.module.css";
import Ability from "./ability/Ability";

interface AbilitiesProps {}

const Abilities: React.FC<AbilitiesProps> = () => {
  return (
    <div className={styles.abilities}>
      <h2>Чему вы научитесь?</h2>
      <div className={styles.container}>
        <Ability
          title={"Тем, кто хочет начать программировать"}
          p1={
            "Мы подготовили упражнения для начинающих, которые помогут собственными руками написать первые строчки кода и увидеть, как они работают"
          }
        />
        <Ability
          title={"Понимать алгоритмы и структуры данных"}
          p1={
            "Изучите основные алгоритмы и структуры данных и научитесь их реализовывать в Python. Узнаете, как оценивать сложность алгоритмов"
          }
        />

        <Ability
          title={"Создавать программы на Python"}
          p1={
            "Научитесь создавать программы на Python в разных стилях: императивном, объектном и функциональном."
          }
        />

        <Ability
          title={"Работать с сетью"}
          p1={"Поймёте, как устроено клиент-серверное взаимодействие"}
        />

        <Ability
          title={"Тестировать код"}
          p1={
            "Освоите методы отладки и тестирования — сможете находить и исправлять ошибки в своём или чужом коде"
          }
        />
      </div>
    </div>
  );
};

export default Abilities;
