'use client'

import { Ban } from 'lucide-react'
import { ReactElement } from 'react'

import { Typography } from '@/shared/typography'

const GlobalError = ({ error }: { error: Error }): ReactElement => {
  return (
    <div className='p-4 flex items-center gap-1.5 justify-center'>
      <Ban color='red' />
      <Typography as='h5' variant='error'>
        {error.message}
      </Typography>
    </div>
  )
}

export default GlobalError
