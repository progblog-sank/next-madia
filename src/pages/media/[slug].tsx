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

const url = process.env.BASE_URL as string
const key = { headers: { "x-microcms-api-key": `${process.env.API_KEY}` } }
// @ts-ignore
export async function getServerSideProps(context) {
    const json = await fetch(url + '/' + context.query.slug, key).then((r) => r.json());
    const article = json;
    return { props: { article } };
}


export default MediaSlug;
