import React from "react";
import styles from "./style.module.scss";

export type PopupProps = {
  children: React.ReactNode;
};

export function Popup({ children }: PopupProps) {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__card}>{children}</div>
    </div>
  );
}
