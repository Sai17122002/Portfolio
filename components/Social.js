import styles from "../styles/social.module.css";
import {
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
  return (
    <div className={styles.social}>
      <a
        href="https://www.linkedin.com/in/sai-aravind-86b9a1217/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="fa-lg" />
        LinkedIn
      </a>
      <a
        href="https://github.com/Sai17122002"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} className="fa-lg" />
        GitHub
      </a>
    </div>
  );
};

export default Social;
