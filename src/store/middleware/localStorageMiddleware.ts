import { Middleware } from '@reduxjs/toolkit'

export const localStorageMiddleware: Middleware = (store) => (next) => (action: any) => {
  const result = next(action)

  if (action.type === 'account/registerUser/fulfilled') {
    if (typeof window !== 'undefined') {
      localStorage.setItem('profile', JSON.stringify(action.payload.user))
    }
  }

  if (action.type === 'auth/loginUser/fulfilled') {
    if (typeof window !== 'undefined') {
      localStorage.setItem('login', JSON.stringify(action.payload.user))
    }
  }

  if (action.type === 'auth/logout') {
    localStorage.removeItem('profile')
  }

  return result
}
