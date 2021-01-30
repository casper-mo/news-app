import Link from "next/link";
import styles from "../../styles/articleList.module.css";
const articleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={styles.card}>
        <img src={article.imageUrl} alt={article.title} />
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.body}>{article.summary}</p>
      </a>
    </Link>
  );
};

export default articleItem;
