import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import firebase from '../../utils/firebase/clientInit';
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, startAfter, where } from "firebase/firestore";



const CLIENTFIRE: NextPage = () => {

  const [books, setBook] = useState<any>([])
  const [lastQuery, setLastQuery] = useState<any>()



  const fetchFireStore = async () => {
    const db = getFirestore(firebase);
    const q = query(collection(db, "basic_relay"), orderBy("time_stamp", "asc"), limit(2));
    const querySnapshot = await getDocs(q);
    const documentSnapshots = await getDocs(q);
    setLastQuery(documentSnapshots.docs[documentSnapshots.docs.length - 1])
    const tempArray = new Array
    querySnapshot.forEach((doc) => {
      tempArray.push(doc.data())
    });
    setBook(tempArray)
  }

  const addBooks = async () => {
    const db = getFirestore(firebase);
    const q = query(collection(db, "basic_relay"), orderBy("time_stamp", "asc"), startAfter(lastQuery), limit(1));

    const querySnapshot = await getDocs(q);
    const documentSnapshots = await getDocs(q);
    setLastQuery(documentSnapshots.docs[documentSnapshots.docs.length - 1])
    const tempArray = books
    querySnapshot.forEach((doc) => {
        tempArray.push(doc.data())
    });
    setBook(([...tempArray]))
  }

  useEffect(() => {
    fetchFireStore()
  }, [])




  return (
    <>
      {books.map((el: any) => {
        return (
          <div key={el.book_amazon}>
            <p><img src={el.book_img} alt={el.book_title} /></p>
            <p>{el.book_title}</p>
            <p>{el.book_impression}</p>
          </div>
        )
      })}

      <button onClick={addBooks}>追加する</button>
    </>
  )

};


export default CLIENTFIRE;
