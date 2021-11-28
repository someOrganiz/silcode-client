import React from "react";
import EntryTitle from "../common/entry/EntryTitle";
import EntryWrapper from "../common/entry/EntryWrapper";
import styles from "./HomeEntry.module.css";

interface HomeEntryProps {}

const HomeEntry: React.FC<HomeEntryProps> = ({}) => {
  return (
    <EntryWrapper
      img="https://www.ykc.com/wp-content/uploads/2018/12/videoblocks-printed-circuit-board-video-motherboard-blue-and-purple-digital-technology-background_hjzpzqrwz_thumbnail-full01.png"
      alt="blog entry image"
    >
      <EntryTitle text="ДОБРО ПОЖАЛОВАТЬ В SILCODE!" />
    </EntryWrapper>
  );
};

export default HomeEntry;
