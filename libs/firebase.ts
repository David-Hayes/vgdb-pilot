import { initializeApp, getApps } from 'firebase/app'

const firebaseCreds = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  appID: process.env.NEXT_PUBLIC_FIREBASE_APPID,
}

const firebaseApp = initializeApp(firebaseCreds)

export default firebaseApp
