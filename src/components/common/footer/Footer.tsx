import React from "react";
import styles from "./Footer.module.css";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <address>
          <ul className={styles.socialIcons}>
            <SocialIcon
              img={
                "https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
              }
              alt={"Twitter"}
              href={"#0"}
            />
            <SocialIcon
              img={
                "https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png"
              }
              alt={"YouTube"}
              href={""}
              // href={"https://www.youtube.com/channel/UCBc43bzRW7Bn14jlQD10K9A"}
            />
            <SocialIcon
              img={
                "https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"
              }
              alt={"Facebook"}
              href={"#0"}
            />
            <SocialIcon
              img={
                "https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
              }
              alt={"Instagram"}
              href={"#0"}
            />
          </ul>
        </address>
        <div className={styles.copyright}>
          <a href="#0" className={styles.copyrightLink}>
            Copyright © 2021 Silcode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
