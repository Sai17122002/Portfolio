import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  const year = new Date(Date.now()).getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div>
          <h3>Let&apos;s Connect</h3>
          <ul>
            <li>
              <a href="mailto:saiaravind0611@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sai-aravind-86b9a1217/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
