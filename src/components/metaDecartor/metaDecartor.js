import Head from "next/head";
// import Logo from "../../local/logo.png";
const metaDecartor = ({ title, description, imgUrl, imgAlt }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content="news,Spaceflight , Spaceflight  news" />
      <meta name="author" content="Casper Muhammed" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={{ description }} />
      <meta property="og:image" content={imgUrl} />

      <meta name="twitter:card" content={imgUrl} />

      <meta property="og:site_name" content={title} />
      <meta name="twitter:image:alt" content={imgAlt}></meta>
      <title>{title}</title>
    </Head>
  );
};
metaDecartor.defaultProps = {
  title: "Spaceflight News",
  description: "Get the latest news in spaceFlight",
  imgUrl: "https://www.mediafire.com/convkey/99d4/ljdmmqkko5yl5iqzg.jpg",
  imgAlt: "spaceflight logo",
};
export default metaDecartor;
