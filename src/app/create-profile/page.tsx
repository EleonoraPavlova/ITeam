'use client'

import { useFormik } from 'formik'
import { ReactElement } from 'react'
import * as Yup from 'yup'

import ContentPanel from '@/components/contentPanel'
import { Button } from '@/shared/button'
import { Input } from '@/shared/input'
import { Typography } from '@/shared/typography'

const CreateProfilePage = (): ReactElement => {
  const formik = useFormik({
    initialValues: { name: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
      password: Yup.string().min(2, 'Password must be at least 2 characters').required('Password is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form data', values)
      resetForm()
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
              type='text'
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
              Create
            </Button>
          </div>
        </form>
      </ContentPanel>
    </div>
  )
}

export default CreateProfilePage
