'use client'

import { ReactNode, useEffect } from 'react'

import { useAppDispatch } from '@/store/hooks'
import { setAccount } from '@/store/reducers/account'

interface Props {
  children: ReactNode
}

const AuthInitializer = ({ children }: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAccount = localStorage.getItem('account')
      if (storedAccount) {
        dispatch(setAccount({ message: '', user: JSON.parse(storedAccount) }))
      }
    }
  }, [dispatch])

  return <>{children}</>
}

export default AuthInitializer
