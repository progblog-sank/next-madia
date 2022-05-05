import type { NextPage } from "next";


// @ts-ignore
const MediaSlug: NextPage = () => {
    return <p>hoge</p>
};

// const url = process.env.NEXT_PUBLIC_BASE_URL as string
// const key = { headers: { "x-microcms-api-key": `${process.env.NEXT_PUBLIC_API_KEY}` } }
// // @ts-ignore
// export async function getServerSideProps(context) {
//     const json = await fetch(url + '/' + context.query.slug, key).then((r) => r.json());
//     const article = json;
//     return { props: { article } };
// }


export default MediaSlug;
