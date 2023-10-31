import React from "react";
import styles from "./style.module.scss";
import { Post } from "../post";

export type GridProps = React.HTMLAttributes<HTMLDivElement>;

export function Grid({ className, ...rest }: GridProps) {
  return (
    <div className={`${styles.contentGrid} ${className ?? ""}`} {...rest} />
  );
}
