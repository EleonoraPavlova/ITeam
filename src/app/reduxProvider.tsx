'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import AuthInitializer from '@/components/authInitializer'
import { store } from '@/store'

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthInitializer> {children}</AuthInitializer>
    </Provider>
  )
}

export default ReduxProvider
