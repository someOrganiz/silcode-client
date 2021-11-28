import { ReactElement } from "react";

import styles from "../styles/Home.module.css";
import { useTranslation } from "../hooks/myHooks";
import FHLayout from "../components/common/layouts/HFLayout";
import AboutEntry from "../components/about/entry/AboutEntry";
import Description from "../components/about/description/Description";

export default function About() {
  const { aboutPage } = useTranslation();

  return (
    <main className={styles.main}>
      <AboutEntry />
      <Description />
    </main>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <FHLayout>{page}</FHLayout>;
};
