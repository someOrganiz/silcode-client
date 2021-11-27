import React from "react";
import styles from "./BlogPost.module.css";

interface BlogPostProps {
  tags: string[];
  title: string;
  date: string;
  author: string;
  description: string;
  img: string;
  alt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  tags,
  title,
  date,
  author,
  description,
  img,
  alt,
}) => {
  return (
    <article className={styles.lastPosts}>
      <img className={styles.lastPostImg} src={img} alt={alt} />

      <div className={styles.lastPost}>
        <ul className={styles.list}>
          {tags.map((tag) => (
            <li className={styles.lastPostListItem} key={tag}>
              <a className={styles.lastPostLink} href="#0">
                {tag}
              </a>
            </li>
          ))}
        </ul>
        <h2 className={styles.lastPostTitle}>
          <a href="#0" className={styles.link}>
            {title}
          </a>
        </h2>
        <div className={styles.lastPostDateAuthor}>
          <time className={styles.lastPostDate} dateTime="01-11-2021">
            {date}
          </time>
          <span className={styles.author}>Автор: {author}</span>
        </div>
        <p className={styles.lastPostText}>{description}</p>
      </div>
    </article>
  );
};

export default BlogPost;
