import { Sun, Moon } from "react-feather";
import styles from "../styles/toggle.module.css";

const ToggleSwitch = () => {
  function handleTheme() {

    if(localStorage.getItem("theme") === "light")
    {
      localStorage.setItem("theme", "dark");
    }
    else if(localStorage.getItem("theme") === "dark"){
      localStorage.setItem("theme", "light");
    }
    else
    {
      localStorage.getItem("theme","dark");
    }
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
    
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
