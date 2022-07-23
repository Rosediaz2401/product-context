import { createContext, useState, useEffect } from 'react'
import getPayload from '../utils/getPayload'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)
  const loginUser = (token) => {
    window.localStorage.setItem('token', token)
    const decoded = getPayload(token)
    setUser(decoded)
    setIsAuth(true)
  }
  const logoutUser = () => {
    window.localStorage.removeItem('token')
    setUser({})
    setIsAuth(false)
  }
  useEffect(() => {
    const item = window.localStorage.getItem('token')
    if (item) {
      const decoded = getPayload(item)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [])
  return (
    <AuthContext.Provider value={{
      isAuth, user, loginUser, logoutUser
    }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
