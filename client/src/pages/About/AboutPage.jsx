import styles from "./About.module.css";
import { getImageUrl } from "../../utils/utils";

const AboutPage = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development :</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized websites. My focus is on crafting user-friendly
                interfaces that deliver seamless experiences across various
                devices and platforms.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development :</h3>
              <p>
                While also knowledgeable in backend development, my primary
                focus is on frontend design and user experience optimization.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Summary :</h3>
              <p>
                While proficient in frontend development, I'm eager to explore
                backend development and broaden my skills. I prioritize creating
                responsive and optimized websites while also seeking
                opportunities to enhance my expertise in backend technologies
                for comprehensive web development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
