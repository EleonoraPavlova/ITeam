import { ReactElement, Suspense } from 'react'

import { getJobById } from '@/app/api/jobsApi'
import ContentPanel from '@/components/contentPanel'
import JobItem from '@/components/jobs/jobItem'
import { Progress } from '@/shared/progress'
import { Typography } from '@/shared/typography'
import { mockApiResponse } from '@/types/mock'

const JobDetailsPage = async ({ params }: { params: { slug: string } }): Promise<ReactElement> => {
  const { slug } = params

  const job = await getJobById({ job_id: slug }).catch(() => {
    return mockApiResponse
  })

  return (
    <ContentPanel title='Job Details' className='w-full sm:w-[310px] md:w-[450px]'>
      <Suspense fallback={<Progress />}>
        {mockApiResponse && <Typography variant='error'>This is a mock</Typography>}
        <JobItem data={job.data[0]} isFullVersion />
      </Suspense>
    </ContentPanel>
  )
}
export default JobDetailsPage
