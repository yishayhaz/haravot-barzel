import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

export function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.top}>
        <div className={styles.details}>
          <Image
            src="https://source.unsplash.com/random"
            alt="John Due"
            width={200}
            height={200}
          />
          <h2>John Due</h2>
          <time dateTime="2021-01-01">01/01/2021</time>
        </div>
        <div className={styles.photo}>
          <Image
            src="https://source.unsplash.com/random"
            alt="John Due"
            width={1024}
            height={1024}
          />
        </div>
        <div className={styles.content}></div>
      </div>
      <div className={styles.comments}></div>
    </div>
  );
}
