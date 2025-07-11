'use client'
import { FormikProps } from 'formik'
import { ReactElement } from 'react'

import { Button } from '@/shared/button'
import { Input } from '@/shared/input'
import { Textarea } from '@/shared/textarea'
import { Typography } from '@/shared/typography'
import { UserProfile } from '@/types/user.model'

interface Props {
  formik: FormikProps<UserProfile>
}

const FormCreateProfile = ({ formik }: Props): ReactElement => {
  return (
    <form onSubmit={formik.handleSubmit} className='flex gap-3 flex-col'>
      <div>
        <Input
          name='name'
          placeholder='name'
          autoComplete='username'
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
          autoComplete='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className='mb-1'
        />
        {formik.touched.email && formik.errors.email && <Typography variant='error'>{formik.errors.email}</Typography>}
      </div>
      <div>
        <Input
          type='password'
          name='password'
          autoComplete='current-password'
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
          value={formik.values.country || ''}
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
          className='mb-1 pl-8'
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
  )
}

export default FormCreateProfile
