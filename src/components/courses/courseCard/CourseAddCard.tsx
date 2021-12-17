import Link from "next/link";
import React from "react";
import styles from "./CourseCard.module.css";

interface CourseAddCardProps {
  to: string;
}

const CourseAddCard: React.FC<CourseAddCardProps> = ({ to }) => {
  return (
    <Link href={to}>
      <a className={styles.courseCard}>
        <div className={styles.addCard}>добавить</div>
      </a>
    </Link>
  );
};

export default CourseAddCard;
