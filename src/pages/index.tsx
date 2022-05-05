import type { NextPage } from "next";
import Link from "next/link";
interface Article {
  id: string,
  title: string
}

// @ts-ignore
const Home: NextPage = ({ articles }) => {
  if (articles.length > 0) {
    return (
      <ul>
        {articles.map((article: Article) => {
          return <li key={article.id}> <Link href={'/media/' + article.id}><a>{article.title}</a></Link></li>;
        })}
      </ul>
    )
  } else {
    return <p>loading.....</p>
  }


};


const url = process.env.NEXT_PUBLIC_BASE_URL as string
const key = { headers: { "x-microcms-api-key": `${process.env.NEXT_PUBLIC_API_KEY}` } }
export async function getServerSideProps() {
  const json = await fetch(url, key).then((r) => r.json());
  const articles = json.contents;
  return { props: { articles } };
}


export default Home;
