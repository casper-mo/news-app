import Link from "next/link";
import Meta from "../../components/metaDecartor/metaDecartor";
import styles from "../../styles/article.module.css";
const article = ({ data }) => {
  return (
    <>
      <Meta
        title={`${data.title}-spaceFlight news`}
        description={data.summary}
        imgUrl={data.imageUrl}
        imgAlt={`${data.title}-spaceFlight news`}
      />
      <section className={styles.container}>
        <img src={data.imageUrl} alt={data.title} />
        <a href={data.url} target="_blank">
          <h3>{data.title}</h3>
        </a>
        <p>{data.summary}</p>
        <br />
        <Link href="/">
          <a className={styles.home_link}>Go back</a>
        </Link>
      </section>
    </>
  );
};

export default article;

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://www.spaceflightnewsapi.net/api/v2/articles/${context.params.id}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://www.spaceflightnewsapi.net/api/v2/articles/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch("https://www.spaceflightnewsapi.net/api/v2/articles");
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
