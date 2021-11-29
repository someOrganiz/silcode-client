import React from "react";
import EntryTitle from "../common/entry/EntryTitle";
import EntryWrapper from "../common/entry/EntryWrapper";
import styles from "./HomeEntry.module.css";

interface HomeEntryProps {}

const HomeEntry: React.FC<HomeEntryProps> = ({}) => {
  return (
    <EntryWrapper img="/HomePagePurple.webp" alt="blog entry image">
      <EntryTitle text="ДОБРО ПОЖАЛОВАТЬ В SILCODE!" />
    </EntryWrapper>
  );
};

export default HomeEntry;
