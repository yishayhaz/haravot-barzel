import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { FaRegCompass } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { useRouter } from "next/router";

const LINKS = [
  {
    name: "Home",
    path: "/",
    icon: <FiHome />,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: <FaRegCompass />,
  },
  {
    name: "Me",
    path: "/me",
    icon: <BiCog />,
  },
];

export function Navbar() {
  const router = useRouter();

  const active = useMemo(() => {
    if (router.pathname === "/") return 0;
    if (router.pathname === "/explore") return 1;
    return 2;
  }, [router]);

  return (
    <div className={styles.nav}>
      {LINKS.map((link, idx) => (
        <Link
          href={link.path}
          className={styles.nav__item}
          key={idx}
          aria-current={idx === active ? "page" : undefined}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
