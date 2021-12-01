import React, { ReactElement } from "react";
import FHLayout from "../components/common/layouts/HFLayout";
import BlogList from "../components/blog/container/BlogList";
import BlogAside from "../components/blog/aside/BlogAside";
import styles from "../styles/Blog.module.css";
import EntryWrapper from "../components/common/entry/EntryWrapper";
import EntryTitle from "../components/common/entry/EntryTitle";

export default function Blog() {
  return (
    <main className={styles.main}>
      <EntryWrapper img="/BlogPageTech.webp" alt="blog entry image">
        <EntryTitle text="Блог о технологиях, программировании и гаджетах" />
      </EntryWrapper>
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
