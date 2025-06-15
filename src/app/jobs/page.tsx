import { getSearch } from 'app/api/jobsApi'
import { ReactElement, Suspense } from 'react'

import ContentPanel from '@/components/contentPanel'
import JobsList from '@/components/jobs/jobsList'
import { getFirstString } from '@/lib/getFirstString'
import { Progress } from '@/shared/progress'
import { Typography } from '@/shared/typography'
import { EMPLOYMENT_TYPES_OPTIONS, EmploymentTypesOptionValue } from '@/types/jobs.model'

const JobsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}): Promise<ReactElement> => {
  const params = await searchParams

  const query = getFirstString(params.query)
  const employment_types = getFirstString(params.employment_types)
  const fields = getFirstString(params.fields)
  const country = getFirstString(params.country)

  const data = await getSearch({
    query: query ?? '',
    employment_types: (employment_types as EmploymentTypesOptionValue) ?? EMPLOYMENT_TYPES_OPTIONS[0].value,
    fields: fields ? [fields] : undefined,
    country,
  })

  return (
    <ContentPanel title='Jobs by filters'>
      {data.data.length ? (
        <Suspense fallback={<Progress />}>
          <JobsList data={data.data} />
        </Suspense>
      ) : (
        <Typography as='h6' variant='subtitle1'>
          No results
        </Typography>
      )}
    </ContentPanel>
  )
}
export default JobsPage
