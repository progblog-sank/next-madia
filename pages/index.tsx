import type { NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [articles, serArticles] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
        headers: { "x-microcms-api-key": `${process.env.NEXT_PUBLIC_API_KEY}` },
      })
      .then((response) => {
        serArticles(response.data.contents);
      });
  }, []);
  return (
    <>
      <ul>
        {articles.map((article: any) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
