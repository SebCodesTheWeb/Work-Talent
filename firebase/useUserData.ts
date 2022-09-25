import { createContext } from 'react'
import { auth} from './clientApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import { User } from 'firebase/auth'

export const useUserData = () => {
  const [user] = useAuthState(auth)
  return { user }
}

interface UserContextType {
  user: User | undefined | null
}

export const UserContext = createContext<UserContextType>({user: null})
