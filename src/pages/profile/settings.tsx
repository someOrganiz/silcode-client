import React, { ReactElement } from "react";
import HFLayout from "../../components/common/layouts/HFLayout";
import styles from "../../styles/Profile.module.css";

const Settings = () => {
  return (
    <main className={styles.main}>
      <div>My settings!!!!1</div>
    </main>
  );
};

export default Settings;

Settings.getLayout = function getLayout(page: ReactElement) {
  return <HFLayout>{page}</HFLayout>;
};
