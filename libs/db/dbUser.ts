import {
  getFirestore,
  doc,
  getDoc,
  collection,
  setDoc,
} from 'firebase/firestore'
import firebaseApp from '../firebase'

const db = getFirestore(firebaseApp)

export const getUserByID = async (uid: string) => {
  if (!uid) return null
  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}

export const createUser = async (uid: string, data: any) => {
  if (!uid) return null
  const usersRef = collection(db, 'users')
  await setDoc(doc(usersRef, uid), { uid, ...data })
}
