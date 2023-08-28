import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";
import Card from "../components/Card";
import Typewriter from "../components/Typewriter";
import {
  faReact,
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faNodeJs  ,
  faAws
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sai Aravind Raj S</title>
      </Head>
      <section id="hero" className={styles.hero}>
        <div className={styles["hero-content"]}>
          <div className={styles.greeting}>Hello world, I&apos;m </div>
          <h1 className={styles.name}>Sai Aravind Raj</h1>
          <div className={styles["hero-occupation"]}>
            <Typewriter />
          </div>
          <p className={styles["hero-text"]}>
            Crafting an enjoyable digital experience through building
            well-designed, interactive user interfaces
          </p>
          <a href="#projects" className="btn">
            View Projects
          </a>
        </div>
        <Image
          src="/photo.jpeg"
          alt="profile picture"
          height="300"
          width="300"
        />
      </section>
      <section id="projects" className={styles.projects}>
        <h2 className={styles["section-title"]}>Projects</h2>
        <Card />
      </section>
      <section id="about" className={styles.about}>
        <h2 className={styles["section-title"]}>About</h2>
        <p>
          Hi, I&apos;m Sai Aravind Raj and I&apos;m a full stack developer dedicated to
          crafting exceptional digital experiences. I specialize in creating
          websites and user interfaces that are well-designed, performant,
          accessibile, and adhere to SEO practices.
        </p>
        <p>I fell in love with programming and I have at least learned something, I think… 🤷‍♂️</p>
        <p>I know programming languages like Javascript and C/C++. I also have good amount of experience in mordern Technologies like ReactJS, Express and Mongo DB.</p>
        <p>My field of Interests are Problem Solving and in areas related to Web Technologies.</p>
        <p>Whenever I am free, I apply my passion in developing applications with Modern Javascript Library and Frameworks like React.js</p>
        <h3 className={styles["section-title"]}>Skills</h3>
        <div className={styles.skills} >
        <div>
            <FontAwesomeIcon
              icon={faHtml5}
              size="5x"
              style={{ color: "#e34c26" }}
            />
            <div>HTML</div>
          </div>
        <div>
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="5x"
              style={{ color: "#264de4" }}
            />
            <div>CSS</div>
          </div>
          
          <div>
            <FontAwesomeIcon
              icon={faReact}
              size="5x"
              style={{ color: "#61DBFB" }}
            />
            <div>React</div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faSquareJs}
              size="5x"
              style={{ color: "#FFD600" }}
            />
            <div>JavaScript</div>
          </div>
          <div>
              <FontAwesomeIcon icon={faNodeJs} size="5x"
              style={{ color: "#FFD600" }}/>
            <div>NodeJs</div>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>
            <div style={{paddingTop: "11px"}}>MongoDB</div>
          </div>
          <div>
              <FontAwesomeIcon icon={faAws} size="5x"
              style={{ color: "#FFD600" }} />
            <div>NodeJs</div>
          </div>
        </div>
        

      </section>
      <section id="contact" className={styles.contact}>
        <h2 className={styles["section-title"]}>Contact</h2>
        <p>
          If you would like to chat more, feel free to contact email me at
          saiaravind0611@gmail.com.
        </p>
        <div className={styles["contact-container"]}>
          <a
            className="btn"
            href="mailto:saiaravind0611@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create Email
          </a>
        </div>
      </section>
    </>
  );
}
