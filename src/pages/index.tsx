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


const url = 'https://create-next.microcms.io/api/v1/media'
const key = { headers: { "x-microcms-api-key": '797ad38d37554e9297d8feb731866802a550' } }
export async function getServerSideProps() {
  const json = await fetch(url, key).then((r) => r.json());
  const articles = json.contents;
  return { props: { articles } };
}


export default Home;
