import styles from "../styles/card.module.css";
import Projects from "../vars/Projects";
import Image from "next/image";
import HTMLReactParser from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import { ExternalLink } from "react-feather";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  // add "target" attribute to link, make sure links to cross-origin destination is safe
  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    if ("target" in node) {
      node.setAttribute("rel", "noopener noreferrer");
      node.setAttribute("target", "_blank");
    }
  });

  return (
    <div className={styles["projects-container"]}>
      {Projects.map((project, index) => (
        <div key={index} className={styles["project-card"]}>
          <div className={styles["project-card-image"]}>
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                width={1445}
                height={659}
              />
            ) : (
              ""
            )}
          </div>
          <div className={styles["project-content"]}>
            <div className={styles["project-heading"]}>
              <h3 className={styles["project-title"]}>{project.title}</h3>
              <div className={styles["project-status"]}>
                {!project.status && (
                  <div className={styles["project-status-circle"]}></div>
                )}
                <div className={styles["project-status-text"]}>
                  {project.status ? "" : "In Progress"}
                </div>
              </div>
            </div>
            <p className={styles["project-description"]}>
              {HTMLReactParser(DOMPurify.sanitize(project.description))}
            </p>
            <div className={styles["project-tag-container"]}>
              {project.tags.map((tag, index) => (
                <div key={index} className={styles["project-tag"]}>
                  {tag}
                </div>
              ))}
            </div>
            <div className={styles["project-link-container"]}>
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                View GitHub
              </a>
              {project.status && project.url ? (
                <a
                  href={project.url}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={16} />
                  Visit Site
                </a>
              ) : (
                ""
              )}
              {project.status && project.post ? (
                <a
                  href={project.post}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={16} />
                  View Process
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
