import { getFirestore, doc, getDoc } from 'firebase/firestore'
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

export const createUser = (uid: string, data: any) => {}
