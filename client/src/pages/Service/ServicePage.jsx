import styles from "./Service.module.css";

const ServicePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deepjoy Sarkar</h1>
        <p className={styles.description}>
          I'm a software developer with 1.2 years of experience building
          websites and web applications using HTML, CSS, JavaScript, React, and
          Node.js. Skilled in creating responsive interfaces and implementing
          interactive features, I'm committed to delivering high-quality
          solutions that prioritize user satisfaction.
        </p>
        <a href="mailto:deepjoysarkar9@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default ServicePage;
