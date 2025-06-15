import { getSearch } from 'app/api/jobsApi'
import { ReactElement } from 'react'

import JobsList from '@/components/jobs/jobsList'
import Search from '@/components/search'

const Home = async (): Promise<ReactElement> => {
  const data = await getSearch({ query: 'marketing manager in new york via linkedin', country: 'de' })

  return (
    <div className='py-0 px-[30px]'>
      <Search />
      <JobsList data={data.data} />
    </div>
  )
}

export default Home
