import type { NextPage } from 'next'
import admin from '../../utils/firebase/nodeInit'


export async function getServerSideProps() {
  const db = admin.firestore();
  const collection = db.collection('basic_relay');
  const collectionArray = await collection.doc('3JNpSoaDqHnnD26lysKY').get();
  const data = collectionArray.data()
  console.log(collectionArray.data())
  const jsonData = JSON.parse(JSON.stringify(data));
  return { props: { jsonData } };
}


// @ts-ignore
const FIRESTORE: NextPage = ({ jsonData }) => {
  return <p>{jsonData.book_title}</p>

};


export default FIRESTORE;
