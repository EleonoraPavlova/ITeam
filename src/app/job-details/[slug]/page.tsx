import { ReactElement, Suspense } from 'react'

import { getJobById } from '@/app/api/jobsApi'
import ContentPanel from '@/components/contentPanel'
import JobItem from '@/components/jobs/jobItem'
import { Progress } from '@/shared/progress'

export const revalidate = 86400

const JobDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }): Promise<ReactElement> => {
  const { slug } = await params
  const job = await getJobById({ job_id: slug })

  return (
    <ContentPanel title='Job Details' className='w-full sm:w-[310px] md:w-[450px]'>
      <Suspense fallback={<Progress />}>
        <JobItem data={job.data[0]} isFullVersion />
      </Suspense>
    </ContentPanel>
  )
}
export default JobDetailsPage
