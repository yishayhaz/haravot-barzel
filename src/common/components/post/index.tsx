import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export type PostProps = React.HTMLAttributes<HTMLDivElement> & {
  url: string;
};

export function Post({ className, url, ...rest }: PostProps) {
  return (
    <div className={`${styles.post} ${className ?? ""}`} {...rest}>
      <Image src={url} alt="" width={1024} height={1024} />
    </div>
  );
}
