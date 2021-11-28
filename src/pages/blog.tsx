import React, { ReactElement } from "react";
import FHLayout from "../components/common/layouts/HFLayout";
import BlogList from "../components/blog/container/BlogList";
import BlogAside from "../components/blog/aside/BlogAside";
import styles from "../styles/Blog.module.css";
import BlogEntry from "../components/blog/entry/BlogEntry";

export default function Blog() {
  return (
    <main className={styles.main}>
      <BlogEntry />
      <div className={styles.container}>
        <BlogList />
        <BlogAside />
      </div>
    </main>
  );
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <FHLayout>{page}</FHLayout>;
};
