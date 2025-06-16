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
          <LikeButton jobId={data.job_id} />
        </div>
        <Typography>
          Title: <span className='px-3'>{data.job_title}</span>{' '}
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
          {/*<LinkInfo data={links} />*/}
          {/*<Typography>*/}
          {/*  Publisher: <span className='px-3'>{data.job_publisher}</span>*/}
          {/*</Typography>*/}
          {/*<Typography>*/}
          {/*  Employment types: <span className='px-3'>{data.job_employment_types.join(', ')}</span>*/}
          {/*</Typography>*/}

          {/*<Typography>*/}
          {/*  Description: <span className='px-3'> {data.job_description}</span>*/}
          {/*</Typography>*/}
          {/*<Typography>*/}
          {/*  Remote: <span className='px-3'>{data.job_is_remote ? 'Yes' : 'No'}</span>*/}
          {/*</Typography>*/}
          {/*<Typography>*/}
          {/*  Posted: <span className='px-3'>{data.job_posted_human_readable}</span>*/}
          {/*</Typography>*/}
          {/*<Typography>Benefits: {data.job_benefits?.join(', ') || 'N/A'}</Typography>*/}
          {/*<Typography>*/}
          {/*  Experience (months):{' '}*/}
          {/*  <span className='px-3'>{data.job_required_experience.required_experience_in_months ?? 'N/A'}</span>*/}
          {/*</Typography>*/}
          {/*<Typography>*/}
          {/*  Experience mentioned:{' '}*/}
          {/*  <span className='px-3'>{data.job_required_experience.experience_mentioned ? 'Yes' : 'No'}</span>*/}
          {/*</Typography>*/}
          {/*<Typography>*/}
          {/*  Experience preferred: {data.job_required_experience.experience_preferred ? 'Yes' : 'No'}*/}
          {/*</Typography>*/}

          {/*<Typography>Salary: {data.job_salary || 'N/A'}</Typography>*/}
          {/*<Typography>Currency: {data.job_salary_currency || 'N/A'}</Typography>*/}
          {/*<Typography>Salary period: {data.job_salary_period || 'N/A'}</Typography>*/}
          {/*<Typography>Highlights Qualifications: {data.job_highlights.Qualifications?.join(', ') || 'N/A'}</Typography>*/}
          {/*<Typography>*/}
          {/*  Highlights Responsibilities: {data.job_highlights.Responsibilities?.join(', ') || 'N/A'}*/}
          {/*</Typography>*/}
          {/*<Typography>Highlights Benefits: {data.job_highlights.Benefits?.join(', ') || 'N/A'}</Typography>*/}
        </div>
      )}
    </div>
  )
}

export default JobItem
