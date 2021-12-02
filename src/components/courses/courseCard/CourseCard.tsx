import Link from "next/link";
import React from "react";
import styles from "./CourseCard.module.css";

interface CourseCardProps {
  tags: string[];
  title: string;
  date: string; //дата старта
  duration: string; //длительность курса
  description: string;
  img: string;
  alt: string;
  to: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  to,
  tags,
  title,
  date,
  duration,
  description,
  img,
  alt,
}) => {
  return (
    <Link href={to}>
      <a className={styles.courseCard}>
        <div className={styles.headsection}>
          <img className={styles.courseImg} src={img} alt={alt} />

          <div className={styles.headSectionText}>
            <div className={styles.course}>
              <ul className={styles.list}>
                {tags.map((tag) => (
                  <li className={styles.courseListItem} key={tag}>
                    <div className={styles.courseLink}>{tag}</div>
                  </li>
                ))}
              </ul>
              <h2 className={styles.courseTitle}>{title}</h2>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.courseDateAuthor}>
            <time className={styles.courseDate} dateTime="01-11-2021">
              {date}
            </time>
            <span className={styles.author}>Длительность: {duration}</span>
          </div>

          <p className={styles.courseText}>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default CourseCard;
