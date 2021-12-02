import React, { ReactElement } from "react";
import HLayout from "../../components/common/layouts/Hlayout";
import styles from "../../styles/Sign.module.css";

const Profile = () => {
  return <main className={styles.main}>my profile!!!!</main>;
};

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return <HLayout>{page}</HLayout>;
};
