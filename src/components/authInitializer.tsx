'use client'

import { ReactNode, useEffect } from 'react'

import useUser from '@/hooks/useUser'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setAccount } from '@/store/reducers/account'

interface Props {
  children: ReactNode
}

const AuthInitializer = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector((state) => state.account?.account?._id)

  const { user } = useUser(userId ?? null)

  useEffect(() => {
    if (user) {
      dispatch(setAccount(user))
    }
  }, [user, dispatch])

  return <>{children}</>
}

export default AuthInitializer
