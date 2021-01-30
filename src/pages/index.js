import Meta from "../components/metaDecartor/metaDecartor";
import ArticleList from "../components/articleList/articleList";
export default function Home({ news }) {
  return (
    <>
      <Meta />
      <ArticleList articles={news} />
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`https://www.spaceflightnewsapi.net/api/v2/articles`);
  const news = await res.json();

  return {
    props: {
      news,
    },
  };
};
