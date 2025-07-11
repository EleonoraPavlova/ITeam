import { configureStore } from '@reduxjs/toolkit'

import { localStorageMiddleware } from '@/store/middleware/localStorageMiddleware'
import accountReducer from '@/store/reducers/account'
import authReducer from '@/store/reducers/auth'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
