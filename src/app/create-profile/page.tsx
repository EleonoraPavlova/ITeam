'use client'

import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { ReactElement, useEffect } from 'react'

import { ROUTES } from '@/app/api/routes'
import { initialValues, registrationSchema } from '@/app/create-profile/schema'
import ContentPanel from '@/components/contentPanel'
import { Button } from '@/shared/button'
import { Input } from '@/shared/input'
import { Textarea } from '@/shared/textarea'
import { Typography } from '@/shared/typography'
import { registerUser } from '@/store/actions/account'
import { useAppDispatch } from '@/store/hooks'

const CreateProfilePage = (): ReactElement => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const storedId = localStorage.getItem('user_id')
    if (storedId) {
      router.push(ROUTES.home)
    }
  }, [router])

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(registerUser(values))
      localStorage.setItem('user_id', values._id)
      resetForm()
      router.push(ROUTES.home)
    },
  })

  return (
    <div className='flex justify-center min-h-screen mt-8'>
      <ContentPanel
        title='Create Profile'
        className='w-full sm:w-[310px] md:w-[450px] rounded-2xl border p-3 shadow-sm'
      >
        <form onSubmit={formik.handleSubmit} className='flex gap-3 flex-col'>
          <div>
            <Input
              name='name'
              placeholder='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='mb-1'
            />
            {formik.touched.name && formik.errors.name && <Typography variant='error'>{formik.errors.name}</Typography>}
          </div>
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
          <div>
            <Input
              name='desiredJobTitle'
              placeholder='desired job title'
              value={formik.values.desiredJobTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='mb-1'
            />
            {formik.touched.desiredJobTitle && formik.errors.desiredJobTitle && (
              <Typography variant='error'>{formik.errors.desiredJobTitle}</Typography>
            )}
          </div>
          <div>
            <Input
              name='country'
              placeholder='country'
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='mb-1'
            />
            {formik.touched.country && formik.errors.country && (
              <Typography variant='error'>{formik.errors.country}</Typography>
            )}
          </div>
          <div>
            <Textarea
              name='aboutMe'
              placeholder='about me'
              value={formik.values.aboutMe}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='mb-1'
            />
            {formik.touched.aboutMe && formik.errors.aboutMe && (
              <Typography variant='error'>{formik.errors.aboutMe}</Typography>
            )}
          </div>
          <div className='ml-auto'>
            <Button type='submit' size='sm' className='w-[100px]'>
              Create
            </Button>
          </div>
        </form>
      </ContentPanel>
    </div>
  )
}

export default CreateProfilePage
