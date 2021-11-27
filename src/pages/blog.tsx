import React, { ReactElement } from "react";
import Layout from "../components/common/layouts/Layout";
import BlogPostContainer from "../components/blog/blogPostContainer/BlogPostContainer";
import BlogAside from "../components/blog/aside/BlogAside";
import styles from "../styles/Blog.module.css";

export default function Blog() {
  return (
    <main className={styles.main}>
      <BlogPostContainer />
      <BlogAside />
    </main>
  );
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
