import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as googleSignOut,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const newFirebaseConfig = {
  apiKey: "AIzaSyDNjpx-_FAGaTJpTuQCSVzHDUaZlXJch-g",
  authDomain: "work-talent-c5dd8.firebaseapp.com",
  projectId: "work-talent-c5dd8",
  storageBucket: "work-talent-c5dd8.firebasestorage.app",
  messagingSenderId: "951138012441",
  appId: "1:951138012441:web:f59d3cbd9ce171147cc988",
  measurementId: "G-EWYCBDJCMP"
}

let app
if (!getApps().length) {
  app = initializeApp(newFirebaseConfig)
}

export const auth = getAuth()
export const db = getFirestore(app as any)
export const storage = getStorage(app)
export const googleAuthProvider = new GoogleAuthProvider()

export const signIn = async () => {
  await signInWithPopup(auth, googleAuthProvider)
    .catch((error) => {
      throw Error(error)
    })
}

export const promiseSignIn = async () => {
  return signInWithPopup(auth, googleAuthProvider)
}

export const promiseSignOut = async () => {
  return googleSignOut(auth)
}

export const signOut = async () => {
  await googleSignOut(auth)
    .catch((error) => {
      throw Error(error)
    })
}

export default newFirebaseConfig
