import type { NextPage } from 'next'
import admin from '../../utils/firebase/nodeInit'


export async function getServerSideProps() {
  const db = admin.firestore();
  const collection = db.collection('basic_relay');
  const collectionArray = await collection.doc('3JNpSoaDqHnnD26lysKY').get();
  const data = collectionArray.data()
  const jsonData = JSON.parse(JSON.stringify(data));
  return { props: { jsonData } };
}


// @ts-ignore
const NODEFIRE: NextPage = ({ jsonData }) => {
  return (
    <>
      <p><img src={jsonData.book_img} alt={jsonData.book_title} /></p>
      <p>{jsonData.book_title}</p>
      <p>{jsonData.book_impression}</p>
    </>
  )

};


export default NODEFIRE;
