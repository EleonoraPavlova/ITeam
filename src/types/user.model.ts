export interface UserProfile {
  _id: string
  name: string
  email: string
  password: string
  desiredJobTitle: string
  aboutMe: string
  country?: string
  createdAt?: string
  updatedAt?: string
}
