import * as Yup from 'yup'

import { UserProfile } from '@/types/user.model'

const initialValues: UserProfile = {
  _id: '',
  name: '',
  email: '',
  password: '',
  desiredJobTitle: '',
  aboutMe: '',
}

const registrationSchema = Yup.object({
  name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(2, 'Password must be at least 2 characters').required('Password is required'),
  desiredJobTitle: Yup.string()
    .min(2, 'Desired job title must be at least 2 characters')
    .max(100, 'Desired job title cannot exceed 100 characters'),
  aboutMe: Yup.string().max(500, 'About me cannot exceed 500 characters'),
  country: Yup.string()
    .min(2, 'Country must be at least 2 characters')
    .max(50, 'Country cannot exceed 50 characters')
    .optional(),
})

export { initialValues, registrationSchema }
