import React from "react";
import styles from "./style.module.scss";

export type PostProps = React.HTMLAttributes<HTMLDivElement>;

export function Post({ className, ...rest }: PostProps) {
  return <div className={`${styles.post} ${className ?? ""}`} {...rest} />;
}
