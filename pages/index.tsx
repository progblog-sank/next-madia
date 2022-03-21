import type { NextPage } from 'next'
import axios from 'axios'

axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
  headers: { 'x-microcms-api-key': `${process.env.NEXT_PUBLIC_API_KEY}` },
}).then(response => {
  console.log(response)
})


const Home: NextPage = () => {
  return (
    <>
      <h1>記事一覧</h1>
    </>
  )
}

export default Home
