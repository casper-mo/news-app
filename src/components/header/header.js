import styles from "../../styles/Header.module.css";
const header = () => {
  return (
    <header>
      <h1 className={styles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={styles.description}>
        keep up to date with the latest web dev news
      </p>
    </header>
  );
};

export default header;
