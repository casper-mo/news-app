import styles from "../../styles/articleList.module.css";
import ArticleItem from "../articleItem/articleItem";
const articleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
};

export default articleList;
