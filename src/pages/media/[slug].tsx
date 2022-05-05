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

const url = 'https://create-next.microcms.io/api/v1/media'
const key = { headers: { "x-microcms-api-key": '797ad38d37554e9297d8feb731866802a550' } }
// @ts-ignore
export async function getServerSideProps(context) {
    const json = await fetch(url + '/' + context.query.slug, key).then((r) => r.json());
    const article = json;
    return { props: { article } };
}


export default MediaSlug;
