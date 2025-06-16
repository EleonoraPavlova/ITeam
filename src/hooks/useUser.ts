'use client'

import useSWR from 'swr'

import { fetcher } from '@/lib/fetcher'
import { UserProfile } from '@/types/user.model'

function useUser(id: string | null) {
  const { data, error, isLoading } = useSWR<UserProfile>(`/user/${id}`, fetcher)

  return {
    user: data,
    isLoading,
    isError: error,
  }
}

export default useUser
