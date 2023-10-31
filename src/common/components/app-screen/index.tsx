import React from "react";
import { Navbar } from "../navbar";
import styles from "./style.module.scss";

export type AppScreenProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children: React.ReactElement;
};

export function AppScreen({ children, className, ...rest }: AppScreenProps) {
  return (
    <div className={`${styles.screen} ${className ?? ""}`} {...rest}>
      {children}
      <Navbar />
    </div>
  );
}
