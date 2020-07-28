import firebase, { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBNcoQ8YdGNfCztfdFQf4tgclPI9bjM47g',
  authDomain: 'millow-closet.firebaseapp.com',
  databaseURL: 'https://millow-closet.firebaseio.com',
  projectId: 'millow-closet',
  storageBucket: 'millow-closet.appspot.com',
  messagingSenderId: '587692910492',
  appId: '1:587692910492:web:169ac32c204cdb6fac4a59',
  measurementId: 'G-KEMN240FW0'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
