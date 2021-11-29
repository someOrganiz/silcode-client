import React from "react";
import EntryTitle from "../../common/entry/EntryTitle";
import EntryWrapper from "../../common/entry/EntryWrapper";
import styles from "./AboutEntry.module.css";

interface AboutEntryProps {}

const AboutEntry: React.FC<AboutEntryProps> = ({}) => {
  return (
    <EntryWrapper img="/AboutPagePlanet.webp" alt="blog entry image">
      <EntryTitle text="Очень рады познакомиться. Мы SILCODE. А вы?" />
    </EntryWrapper>
  );
};

export default AboutEntry;
