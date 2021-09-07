import { createContext, useContext, useState, useEffect } from 'react'
import firebaseApp from './firebase'
import {
  getAuth,
  onAuthStateChanged,
  User,
  signOut as authSignOut,
} from 'firebase/auth'
import { getUserByID, createUser } from './db/dbUser'

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

const defaultLists = ['Played']

const AppContext = createContext<Partial<AppContextProps>>({})

export const AppProvider = ({ children }: AppProviderProps) => {
  const auth = getAuth(firebaseApp)
  const [user, setUser] = useState<UserProps | null>(null)
  const [authLoading, setAuthLoading] = useState(true)

  const handleUser = async (rawUser: User | null) => {
    if (rawUser) {
      const user = await fetchUser(rawUser)
      setUser(user)
      setAuthLoading(false)
      return user
    }
    setUser(null)
    setAuthLoading(false)
    return false
  }

  const signOut = () => {
    authSignOut(auth).then(() => {
      handleUser(null)
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      handleUser(firebaseUser)
    })
  }, [auth])

  return (
    <AppContext.Provider value={{ user, authLoading, signOut }}>
      {children}
    </AppContext.Provider>
  )
}

const fetchUser = async (user: User) => {
  const userData = await getUserByID(user.uid)
  if (!userData) {
    await createUser(user.uid, { joined: Date.now(), lists: defaultLists })
  }
  return {
    uid: user.uid,
    username: userData?.username || null,
    avatar: userData?.avatar || null,
    joined: userData?.joined || null,
    lists: userData?.lists || defaultLists,
  }
}

export const useAppState = () => {
  return useContext(AppContext)
}
