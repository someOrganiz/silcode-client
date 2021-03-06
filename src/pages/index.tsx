import Head from "next/head";
import { ReactElement } from "react";
import styles from "../styles/Home.module.css";

import { useTranslation } from "../hooks/myHooks";
import HFLayout from "../components/common/layouts/HFLayout";
import EntryWrapper from "../components/common/entry/EntryWrapper";
import EntryTitle from "../components/common/entry/EntryTitle";
import AdvantageSection from "../components/home/advantages/AdvantageSection";
import HelpSection from "../components/home/help/HelpSection";
import FactSection from "../components/home/facts/FactSection";
import TrySection from "../components/home/try/TrySection";
import TitleSpacer from "../components/common/spacer/TitleSpacer";

export default function Home() {
  const t = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EntryWrapper img="/HomePagePurple.webp" alt="blog entry image">
          <EntryTitle text="ДОБРО ПОЖАЛОВАТЬ В SILCODE!" />
        </EntryWrapper>
        <TitleSpacer title="О площадке: " />
        <AdvantageSection />
        <HelpSection />
        {/* <FactSection /> */}
        <TrySection />
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
