import React from "react";
import styles from "./style.module.scss";
import { Grid } from "@/common/components/grid";
import { Post } from "@/common/components/post";
import { AppScreen } from "@/common/components/app-screen";
import Image from "next/image";

export function ExsploreScreen() {
  return (
    <AppScreen>
      <div className={styles.container}>
        <Grid>
          {Array.from({ length: 21 }).map((_, idx) => (
            <Post
              key={idx}
              url={"https://source.unsplash.com/random?q=" + idx}
            />
          ))}
        </Grid>
      </div>
    </AppScreen>
  );
}
