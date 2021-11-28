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
    <article className={styles.article}>
      <img className={styles.postImg} src={img} alt={alt} />

      <div className={styles.post}>
        <ul className={styles.list}>
          {tags.map((tag) => (
            <li className={styles.postListItem} key={tag}>
              <a className={styles.postLink} href="#0">
                {tag}
              </a>
            </li>
          ))}
        </ul>
        <h2 className={styles.postTitle}>
          <a href="#0" className={styles.link}>
            {title}
          </a>
        </h2>
        <div className={styles.postDateAuthor}>
          <time className={styles.postDate} dateTime="01-11-2021">
            {date}
          </time>
          <span className={styles.author}>Автор: {author}</span>
        </div>
        <p className={styles.postText}>
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
        </p>
      </div>
    </article>
  );
};

export default BlogPost;
