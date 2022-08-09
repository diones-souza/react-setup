import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState
} from 'react'
import type { NextPage } from 'next'
import { setCookie, parseCookies } from 'nookies'

interface User {
  name: string
  email: string
  avatar_url: string
}

interface SignInData {
  email: string
  password: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  signIn: (data: SignInData) => Promise<void>
}

interface Props {
  children: any
}

export const AuthContext = createContext({} as AuthContextType)

const AuthProvider: NextPage<PropsWithChildren<Props>> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      console.log(token)
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    // const { token, user } = await api.post('auth',form)
    // setCookie(undefined, 'nextauth.token', token, {
    //   maxAge: 60 * 60 * 1 // 1 hour
    // })
    // api.defaults.headers['Authorization'] = `Bearer ${token}`
    // setUser(user)
    // Router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
