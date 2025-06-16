import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

import { ROUTES } from '@/app/api/routes'
import { JOB_INFO_ITEMS } from '@/components/jobs/const'
import JobProperties from '@/components/jobs/jobProperties'
import LikeButton from '@/components/likeButton'
import { Button } from '@/shared/button'
import { Typography } from '@/shared/typography'
import { JobData } from '@/types/jobs.model'

interface Props {
  data: JobData
  isFullVersion?: boolean
}

const JobItem = ({ data, isFullVersion = false }: Props): ReactElement => {
  return (
    <div className='rounded-2xl border p-3 shadow-sm'>
      <div className='flex flex-col gap-3 mb-2'>
        <div className='flex gap-3 items-center justify-between'>
          <div className='flex gap-3 items-center'>
            <Image
              src={data.employer_logo || '/images/logo.webp'}
              alt={data.employer_name}
              className='rounded-[8px] mb-1'
              width={40}
              height={40}
            />
            <Typography as='h4' variant='h4' className='line-clamp-2'>
              {data.employer_name}
            </Typography>
          </div>
          <LikeButton data={data} />
        </div>
        <Typography>
          Title: <span className='px-3'>{data.job_title}</span>
        </Typography>
        <Typography as='h6'>
          <Typography>
            Location: <span className='px-3'>{`${data.job_location}   ${data.job_country}`}</span>
          </Typography>
        </Typography>
        {!isFullVersion && (
          <div className='ml-auto'>
            <Button asChild size='sm' className='w-[100px]'>
              <Link href={ROUTES.getJobDetails(data.job_id)}>Details</Link>
            </Button>
          </div>
        )}
      </div>
      {isFullVersion && (
        <div className='flex gap-3 flex-col'>
          <JobProperties data={JOB_INFO_ITEMS} />
        </div>
      )}
    </div>
  )
}

export default JobItem
