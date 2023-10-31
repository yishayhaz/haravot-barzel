import { Navbar } from "@/common/components/navbar";
import React from "react";
import styles from "./style.module.scss";
import { ContentGrid } from "@/common/components/content";

export function ExsploreScreen() {
  return (
    <>
      <div className={styles.container}>
        <ContentGrid>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </ContentGrid>
      </div>

      <Navbar />
    </>
  );
}
