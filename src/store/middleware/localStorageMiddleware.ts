import { Middleware } from '@reduxjs/toolkit'

export const localStorageMiddleware: Middleware = (store) => (next) => (action: any) => {
  const result = next(action)

  if (action.type === 'account/registerUser/fulfilled') {
    if (typeof window !== 'undefined') {
      localStorage.setItem('account', JSON.stringify(action.payload.user))
    }
  }

  if (action.type === 'auth/loginUser/fulfilled') {
    if (typeof window !== 'undefined') {
      localStorage.setItem('account', JSON.stringify(action.payload.user))
    }
  }

  if (action.type === 'auth/logout') {
    localStorage.removeItem('account')
  }

  return result
}
