import React from "react";
import { useRouter } from "next/router";
import { Navbar } from "@/common/components/navbar";
import Image from "next/image";
import styles from "./style.module.scss";
import { Grid } from "@/common/components/grid";
import { PostPreview } from "@/common/components/post";
import { AppScreen } from "@/common/components/app-screen";

export function ProfileScreen() {
  const router = useRouter();

  return (
    <AppScreen>
      <div className={styles.profile_screen}>
        <section className={styles.profile}>
          <div className={styles.photo}>
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile Photo"
              width={4096}
              height={4096}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.headline}>
              <h1>Due John</h1>
              <span>(@{router.query.profile})</span>
            </div>
            <div className={styles.stats}>
              <div>
                <span>20.08.1999</span> - <span>7.10.2023</span>
              </div>
              &middot;
              <div>
                <b>🕯️</b> <span>3,663</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate tempore veritatis nihil maiores earum cumque assumenda
              ad nam dignissimos! Nostrum quis necessitatibus natus rem dicta
              nesciunt ab provident accusantium eos!
            </p>
          </div>
        </section>
        <section className={styles.content}>
          <Grid>
            {Array.from({ length: 21 }).map((_, idx) => (
              <PostPreview
                key={idx}
                url={"https://source.unsplash.com/random?q=" + idx}
              />
            ))}
          </Grid>
        </section>
      </div>
    </AppScreen>
  );
}
