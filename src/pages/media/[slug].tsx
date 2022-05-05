import type { NextPage } from "next";


// @ts-ignore
const MediaSlug: NextPage = ({ article }) => {
    const createMarkup = () => {
        return { __html: article.body };
    };
    return (
        <>
            <h2>{article?.title}</h2>
            <div className="content" dangerouslySetInnerHTML={createMarkup()} />
        </>
    )
};


const url = process.env.NEXT_PUBLIC_BASE_URL as string
const key = { headers: { "x-microcms-api-key": `${process.env.NEXT_PUBLIC_API_KEY}` } }
export async function getServerSideProps() {
    const json = await fetch(url, key).then((r) => r.json());
    const article = json.contents[0];
    return { props: { article } };
}


export default MediaSlug;
