import type { NextPage } from "next";
import Link from "next/link";
interface Article {
  id: string,
  title: string
}

// @ts-ignore
const Home: NextPage = () => {
  return <p>hoge</p>


};


// const url = process.env.NEXT_PUBLIC_BASE_URL as string
// const key = { headers: { "x-microcms-api-key": `${process.env.NEXT_PUBLIC_API_KEY}` } }
// export async function getServerSideProps() {
//   const json = await fetch(url, key).then((r) => r.json());
//   const articles = json.contents;
//   return { props: { articles } };
// }


export default Home;
