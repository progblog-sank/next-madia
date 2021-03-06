import type { NextPage } from 'next'
import Book from '../../compnents/book';
import Title from '../../compnents/title';
import admin from '../../utils/firebase/nodeInit'


export async function getServerSideProps() {
  const db = admin.firestore();
  const collection = db.collection('basic_relay');
  const collection_2 = db.collection('second_relay');
  const collectionArray = await collection.doc('3JNpSoaDqHnnD26lysKY').get();
  const collectionArray_2 = await collection_2.doc('0j1nl71Ppy8w83af2O00').get();
  const data = collectionArray.data()
  const data_2 = collectionArray_2.data()
  const jsonData = JSON.parse(JSON.stringify(data));
  const jsonData_2 = JSON.parse(JSON.stringify(data_2));
  console.log(jsonData_2)
  return { props: { jsonData, jsonData_2 } };
}


// @ts-ignore
const NODEFIRE: NextPage = ({ jsonData, jsonData_2 }) => {
  return (
    <>
      <Title text={jsonData_2} />
      <Book book={jsonData} />
    </>
  )

};


export default NODEFIRE;
