'use client'

import { ReactElement } from 'react'

import { useCreateProfileFormik } from '@/app/create-profile/hooks/useCreateProfileFormik'
import ContentPanel from '@/components/contentPanel'
import FormCreateProfile from '@/components/form'

const CreateProfilePage = (): ReactElement => {
  const formik = useCreateProfileFormik()

  return (
    <div className='flex justify-center min-h-screen mt-8'>
      <ContentPanel
        title='Create Profile'
        className='w-full sm:w-[310px] md:w-[450px] rounded-2xl border p-3 shadow-sm'
      >
        <FormCreateProfile formik={formik} />
      </ContentPanel>
    </div>
  )
}

export default CreateProfilePage
