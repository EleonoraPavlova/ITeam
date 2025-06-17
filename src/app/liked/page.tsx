'use client'

import { ReactElement, useEffect, useState } from 'react'

import ContentPanel from '@/components/contentPanel'
import JobsList from '@/components/jobs/jobsList'
import { Typography } from '@/shared/typography'
import { JobData } from '@/types/jobs.model'

const LikedPage = (): ReactElement => {
  const [likedJobs, setLikedJobs] = useState<JobData[]>([])

  useEffect(() => {
    const storedJobs = localStorage.getItem('likedJobs')
    if (storedJobs) {
      try {
        setLikedJobs(JSON.parse(storedJobs))
      } catch (e: any) {
        throw new Error(e ?? 'Error parsing liked jobs from localStorage')
      }
    }
  }, [])

  return (
    <ContentPanel title='Liked jobs'>
      {likedJobs.length ? (
        <JobsList data={likedJobs} />
      ) : (
        <Typography as='h6' variant='subtitle1'>
          No liked jobs yet
        </Typography>
      )}
    </ContentPanel>
  )
}

export default LikedPage
