import * as Yup from 'yup'

import { Auth } from '@/types/auth.model'

const initialValues: Auth = { email: '', password: '' }

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(2, 'Password must be at least 2 characters').required('Password is required'),
})

export { initialValues, loginSchema }
