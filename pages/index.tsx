import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import Layout from "../components/layouts/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div>homepage</div>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
