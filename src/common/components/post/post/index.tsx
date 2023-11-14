import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { Comment, CommentsWrapper } from "@/common/components/comment";
import { IoClose } from "react-icons/io5";

const comments = [
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at iusto debitis, rerum molestiae, deserunt inventore amet natus tenetur sapiente quae officiis molestias consequatur perferendis veniam, ea cupiditate sunt perspiciatis.",
    hearts: 12,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 3,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 0,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
  {
    user: {
      name: "John Due",
      avatar: "https://source.unsplash.com/random",
    },
    date: "1h",
    message: "Sorry!",
    hearts: 10,
  },
];

export function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Image
            src="https://source.unsplash.com/random"
            width={500}
            height={500}
            alt="profile"
          />
          <h1>John Due</h1>
          <time>1h</time>
        </div>
        <div className={styles.actions}>
          <button>
            <IoClose />
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.photo}>
          <Image
            src="https://source.unsplash.com/random"
            width={500}
            height={500}
            alt="profile"
          />
        </div>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at
            iusto debitis, rerum molestiae, deserunt inventore amet natus
            tenetur sapiente quae officiis molestias consequatur perferendis
            veniam, ea cupiditate sunt perspiciatis.
          </p>
        </div>
        <div className={styles.interactions}>
          <button>Candle</button>
          <button>Share</button>
          <button>Comment</button>
        </div>
        <CommentsWrapper className={styles.comments}>
          {comments.map((comment, idx) => (
            <Comment key={idx} {...comment} didILike={Math.random() < 0.5} />
          ))}
        </CommentsWrapper>
      </div>
    </div>
  );
}
