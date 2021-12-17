import { ReactElement } from "react";
import { useTranslation } from "../hooks/myHooks";
import HFLayout from "../components/common/layouts/HFLayout";
import Description from "../components/about/description/Description";
import EntryWrapper from "../components/common/entry/EntryWrapper";
import EntryTitle from "../components/common/entry/EntryTitle";
import styles from "../styles/Home.module.css";

export default function About() {
  const { aboutPage } = useTranslation();

  return (
    <main className={styles.main}>
      <EntryWrapper img="/AboutPagePlanet.webp" alt="blog entry image">
        <EntryTitle text="Очень рады познакомиться. Мы SILCODE. А вы?" />
      </EntryWrapper>
      <Description />
    </main>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
