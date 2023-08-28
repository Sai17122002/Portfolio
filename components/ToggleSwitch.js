import { Sun, Moon } from "react-feather";
import styles from "../styles/toggle.module.css";

const ToggleSwitch = () => {
  function handleTheme() {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  return (
    <button className={styles.toggle} onClick={handleTheme} aria-label="Toggle">
      <div className="only-light">
        <Moon />
      </div>
      <div className="only-dark">
        <Sun />
      </div>
    </button>
  );
};

export default ToggleSwitch;
