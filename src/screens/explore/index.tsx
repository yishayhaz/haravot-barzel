import { Navbar } from "@/common/components/navbar";
import React from "react";
import styles from "./style.module.scss";
import { Grid } from "@/common/components/grid";
import { Post } from "@/common/components/post";
import { AppScreen } from "@/common/components/app-screen";

export function ExsploreScreen() {
  return (
    <AppScreen>
      <div className={styles.container}>
        <Grid>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </Grid>
      </div>
    </AppScreen>
  );
}
