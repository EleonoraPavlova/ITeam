import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'

import { ROUTES } from '@/app/api/routes'
import { initialValues, registrationSchema } from '@/app/create-profile/schema'
import { registerUser } from '@/store/actions/account'
import { useAppDispatch } from '@/store/hooks'

export const useCreateProfileFormik = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  return useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(registerUser(values))
      resetForm()
      router.push(ROUTES.home)
    },
  })
}
