import { initializeApp, getApps } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as googleSignOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBEwMXHwItdHxDIjx-u5-weKz4fwiz2eR8',
  authDomain: 'job-talent-7e9cd.firebaseapp.com',
  projectId: 'job-talent-7e9cd',
  storageBucket: 'job-talent-7e9cd.appspot.com',
  messagingSenderId: '369077255894',
  appId: '1:369077255894:web:3850bb6aba72766cb0d377',
  measurementId: 'G-15C1VQDMG7',
}

let app
if (!getApps().length) {
  app = initializeApp(firebaseConfig)
}

export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage(app)
export const googleAuthProvider = new GoogleAuthProvider()

export const signIn = async () => {
  await signInWithPopup(auth, googleAuthProvider)
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.error(error)
    })
}

export const promiseSignIn = async ( ) => {
  return signInWithPopup(auth, googleAuthProvider)
}

export const signOut = async () => {
  await googleSignOut(auth)
    .then((user) => {
      console.log(user)
    })
    .then((error) => {
      console.error(error)
    })
}

export default firebaseConfig
