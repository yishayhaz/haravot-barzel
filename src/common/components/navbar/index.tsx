import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { FaRegCompass } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";

export function Navbar() {
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.nav}>
        <Link href="/" className={styles.nav__item}>
          <GrHomeRounded />
          <span>Home</span>
        </Link>
        <Link href="/explore" className={styles.nav__item}>
          <FaRegCompass />
          <span>Explore</span>
        </Link>
        <Link href="/me" className={styles.nav__item}>
          <FiUser />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
}
