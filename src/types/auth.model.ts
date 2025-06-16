import { UserProfile } from '@/types/user.model'

export interface Auth {
  email: string
  password: string
}

export interface RegisterResponse {
  message: string
  user: UserProfile
}
