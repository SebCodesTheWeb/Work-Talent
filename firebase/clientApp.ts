import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBEwMXHwItdHxDIjx-u5-weKz4fwiz2eR8",
	authDomain: "job-talent-7e9cd.firebaseapp.com",
	projectId: "job-talent-7e9cd",
	storageBucket: "job-talent-7e9cd.appspot.com",
	messagingSenderId: "369077255894",
	appId: "1:369077255894:web:3850bb6aba72766cb0d377",
	measurementId: "G-15C1VQDMG7"
}

let app
if (!getApps().length) {
	app = initializeApp(firebaseConfig)
}

export const auth = getAuth()
export const db = getFirestore(app);
export default firebaseConfig