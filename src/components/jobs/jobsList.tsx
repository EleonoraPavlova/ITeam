import { ReactElement } from 'react'

import JobItem from '@/components/jobs/jobItem'
import { JobData } from '@/types/jobs.model'

type Props = {
  data: JobData[]
}

const JobsList = ({ data }: Props): ReactElement => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {data?.map((i) => <JobItem key={i.job_id} data={i} />)}
    </div>
  )
}

export default JobsList
