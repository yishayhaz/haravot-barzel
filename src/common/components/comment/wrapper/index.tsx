import React from "react";
import styles from "./style.module.scss";

export type CommentsWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export function CommentsWrapper({ className, ...rest }: CommentsWrapperProps) {
  return (
    <div className={`${styles.comments_wrapper} ${className}`} {...rest} />
  );
}
