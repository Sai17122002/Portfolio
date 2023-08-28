/**
 * Layout component shared across all files
 */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles["app-container"]}>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
