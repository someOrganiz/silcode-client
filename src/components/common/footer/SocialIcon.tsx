import React, { FC } from "react";
import styles from "./SocialIcon.module.css";

interface IconProps {
  img: string;
  alt: string;
  href: string;
}

const SocialIcon: FC<IconProps> = ({ img, alt, href }) => {
  return (
    <li className={styles.socialIconItem}>
      <a href={href} className={styles.socialIcon}>
        <img src={img} alt={alt} />
      </a>
    </li>
  );
};

export default SocialIcon;
