import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import firebase from '../../utils/firebase/clientInit';
import { doc, getDoc, getFirestore } from "firebase/firestore";



const CLIENTFIRE: NextPage = () => {

  const [books, setBook] = useState<any>({})

  const fetchFireStore = async () => {
    const db = getFirestore(firebase);
    console.log(db)
    const docRef = doc(db, "basic_relay", "3JNpSoaDqHnnD26lysKY");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setBook(docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    fetchFireStore()
  }, [])




  return (
    <>
      <p><img src={books.book_img} alt={books.book_title} /></p>
      <p>{books.book_title}</p>
      <p>{books.book_impression}</p>
    </>
  )

};


export default CLIENTFIRE;
