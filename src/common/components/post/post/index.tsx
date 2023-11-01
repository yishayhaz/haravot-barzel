import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
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
      <div className={styles.user}>
        <Image
          src="https://source.unsplash.com/random"
          width={500}
          height={500}
          alt="profile"
        />
        <h1>John Due</h1>
        <time>1h</time>
        <div className={styles.actions}>
          <button>
            <IoClose />
          </button>
        </div>
      </div>
      <div className={styles.photo}>
        <Image
          src="https://source.unsplash.com/random"
          width={500}
          height={500}
          alt="profile"
        />
      </div>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at
          iusto debitis, rerum molestiae, deserunt inventore amet natus tenetur
          sapiente quae officiis molestias consequatur perferendis veniam, ea
          cupiditate sunt perspiciatis.
        </p>
      </div>
      <div className={styles.interactions}>
        <button>Candle</button>
        <button>Share</button>
        <button>Comment</button>
      </div>
      <div className={styles.comments}>
        {comments.map((comment, idx) => (
          <div className={styles.comment} key={idx}>
            <Image
              src={comment.user.avatar}
              width={500}
              height={500}
              alt="profile"
            />
            <div className={styles.commentContent}>
              <h1>{comment.user.name}</h1>
              <time>{comment.date}</time>
              <p>{comment.message}</p>
              <div className={styles.commentActions}>
                <button>Reply</button>
                <button>Like</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
