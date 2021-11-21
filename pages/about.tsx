import { ReactElement } from "react";

import styles from "../styles/Home.module.css";
import { useTranslation } from "../hooks/myHooks";
import Layout from "../components/layouts/Layout";

export default function About() {
  const { aboutPage } = useTranslation();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{aboutPage.title}</h1>
      </main>
    </div>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
