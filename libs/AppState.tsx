import { createContext, useContext, useState, useEffect } from 'react'
import firebaseApp from './firebase'
import {
  getAuth,
  onAuthStateChanged,
  User,
  signOut as authSignOut,
} from 'firebase/auth'

export type UserProps = {
  uid: string
  username: string | null
  avatar: string | null
  joined: number | null
  lists: string[]
}

type AppContextProps = {
  user: UserProps | null
  authLoading: boolean
  signOut: Function | any // TODO amend any
  reinstateUser: Function | any // TODO amend any
}

type AppProviderProps = {
  children: React.ReactNode
}

const AppContext = createContext<Partial<AppContextProps>>({})

export const AppProvider = ({ children }: AppProviderProps) => {
  const auth = getAuth(firebaseApp)
  const [user, setUser] = useState<UserProps | null>(null)

  const handleUser = (rawUser: User | null) => {
    console.log(rawUser)
  }

  const signOut = () => {
    const auth = getAuth(firebaseApp)
    authSignOut(auth).then(() => {
      handleUser(null)
    })
  }

  useEffect(() => {
    const auth = getAuth(firebaseApp)
    onAuthStateChanged(auth, (firebaseUser) => {
      handleUser(firebaseUser)
    })
  }, [])

  return (
    <AppContext.Provider value={{ user, signOut }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppContext)
}
