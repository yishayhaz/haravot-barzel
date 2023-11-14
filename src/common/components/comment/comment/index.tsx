import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

export type CommentProps = {
  user: {
    name: string;
    avatar: string;
  };
  date: string;
  message: string;
  hearts: number;
  didILike?: boolean;
};

export function Comment({
  user,
  date,
  message,
  hearts,
  didILike,
}: CommentProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <Image src={user.avatar} width={500} height={500} alt="profile" />
      </div>
      <h3>{user.name}</h3>
      <time>{date}</time>
      <p>{message}</p>
      <div className={styles.hearts}>
        <button>{didILike ? <IoMdHeart /> : <IoIosHeartEmpty />}</button>
        {hearts ? <span>{hearts}</span> : null}
      </div>
      <div className={styles.actions}>
        <button>Reply</button>
        <button>Report</button>
      </div>
    </div>
  );
}
