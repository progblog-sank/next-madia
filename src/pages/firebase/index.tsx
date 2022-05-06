import type { NextPage } from 'next'
import { getApp, FirebaseApp } from 'firebase/app'
import '../../utils/firebase/init'


const FIRESTORE: NextPage =()=> {
  const app: FirebaseApp = getApp()
  return <p>name = {app.name}</p>

};


export default FIRESTORE;
