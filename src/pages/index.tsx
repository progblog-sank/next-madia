import type { NextPage } from "next";

const Home: NextPage = (articles: any) => {

  if (articles.length > 0) {
    return (
      <>
        <ul>
          {articles.map((article: any) => (
            <li key={article.id}>{article.title}</li>
            ))}
          </ul>
      </>
    );
  } else {
    return <div>loading......</div>
  }

};

const url = process.env.NEXT_PUBLIC_BASE_URL as string
const key = { headers: { "x-microcms-api-key": `${process.env.NEXT_PUBLIC_API_KEY}` } }
export async function getServerSideProps() {
  const json = await fetch(url, key).then((r) => r.json());
  const articles = json.contents;
  return {
    props: {
      articles,
    },
  };
}

export default Home;
