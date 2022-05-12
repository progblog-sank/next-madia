import type { NextPage } from "next";
import Link from "next/link";
interface Article {
  id: string,
  title: string
}

const url = process.env.BASE_URL as string
const key = { headers: { "x-microcms-api-key": `${process.env.API_KEY}` } }
export async function getServerSideProps(context: any) {
  let page = 0
  if (context.query.page > 1) {
    page = (context.query.page - 1) * 10
  }
  const json = await fetch(`${url}?offset=${page}`, key).then((r) => r.json());
  const articles = json.contents;
  const totalCount = json.totalCount
  return { props: { articles, totalCount } };
}


// @ts-ignore
const Home: NextPage = ({ articles, totalCount }) => {
  const PER_PAGE = 10
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  if (articles.length > 0) {
    return (
      <>
        <ul>
          {articles.map((article: Article) => {
            return <li key={article.id}> <Link href={'/media/' + article.id}><a>{article.title}</a></Link></li>;
          })}
        </ul>
        <ul>
          {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li key={index}>
              <Link href={`?page=${number}`}>
                <a>{number}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/firebase/node">内田百閒の冥途旅順入場式</Link>
      </>
    )
  } else {
    return <p>loading.....</p>
  }


};





export default Home;
