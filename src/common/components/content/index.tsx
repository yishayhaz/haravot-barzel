import React from "react";
import styles from "./style.module.scss";

export type ContentGridProps = React.HTMLAttributes<HTMLDivElement>;

export function ContentGrid({ className, ...rest }: ContentGridProps) {
  return (
    <div className={`${styles.contentGrid} ${className ?? ""}`} {...rest} />
  );
}
