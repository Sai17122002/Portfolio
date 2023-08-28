import styles from "../styles/navbar.module.css";
import Image from "next/image";
import ToggleSwitch from "../components/ToggleSwitch";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a className={styles["nav-brand"]} href="#">
        <span className={styles["large-logo"]}>Sai Aravind Raj</span>
        <Image
          className={styles["small-logo"]}
          src="/logo.svg"
          alt="Logo"
          width="40"
          height="40"
        />
      </a>
      <ul className={styles["nav-menu"]}>
        <li className={styles["nav-item"]}>
          <a href="#" className={styles["nav-link"]}>
            Home
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="#projects" className={styles["nav-link"]}>
            Projects
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="#about" className={styles["nav-link"]}>
            About
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="#contact" className={styles["nav-link"]}>
            Contact
          </a>
        </li>
        <li>
          <ToggleSwitch />
        </li>
      </ul>
    </nav>
  );
}
