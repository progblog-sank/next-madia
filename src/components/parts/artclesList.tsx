import type { NextPage } from "next";

const ArticlesList: NextPage = ({ articles }: any) => {
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
        return <p>children</p>
    }

};


export default ArticlesList;
