'use client'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { ReactElement } from 'react'

import { ROUTES } from '@/app/api/routes'
import { initialValues, loginSchema } from '@/app/login/schema'
import ContentPanel from '@/components/contentPanel'
import { Button } from '@/shared/button'
import { Input } from '@/shared/input'
import { Typography } from '@/shared/typography'
import { loginUser } from '@/store/actions/auth'
import { useAppDispatch } from '@/store/hooks'

const LoginPage = (): ReactElement => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(loginUser(values))
      resetForm()
      router.push(ROUTES.home)
    },
  })

  return (
    <div className='flex justify-center min-h-screen mt-8'>
      <ContentPanel title='Login' className='w-full sm:w-[310px] md:w-[450px] rounded-2xl border p-3 shadow-sm'>
        <form onSubmit={formik.handleSubmit} className='flex gap-3 flex-col'>
          <div>
            <Input
              name='email'
              placeholder='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='mb-1'
            />
            {formik.touched.email && formik.errors.email && (
              <Typography variant='error'>{formik.errors.email}</Typography>
            )}
          </div>
          <div>
            <Input
              type='password'
              name='password'
              placeholder='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='mb-1'
            />
            {formik.touched.password && formik.errors.password && (
              <Typography variant='error'>{formik.errors.password}</Typography>
            )}
          </div>
          <div className='ml-auto'>
            <Button type='submit' size='sm' className='w-[100px]'>
              Submit
            </Button>
          </div>
        </form>
      </ContentPanel>
    </div>
  )
}

export default LoginPage
