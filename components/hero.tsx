import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <a className={styles.heroChip}>
        <div>Announcing our $35M Series B</div>
      </a>
      <h1 className={styles.heroTitle}>
        Linear is a better way <br />
        to build products
      </h1>
      <p className={styles.heroSubtitle}>
        Meet the new standard for modern software development. <br />
        Streamline issues, sprints, and product roadmaps.
      </p>
      <a href="/" type="button" className={styles.heroButton}>
        Get started
      </a>
    </div>
  );
}
