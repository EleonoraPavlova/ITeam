'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, ReactElement, useState } from 'react'

import { ROUTES } from '@/app/api/routes'
import TopBar from '@/components/topBar'
import { Card } from '@/shared/card'
import { Typography } from '@/shared/typography'
import {
  DATE_POSTED_OPTIONS,
  DatePostedOptionValue,
  EMPLOYMENT_TYPES_OPTIONS,
  EmploymentTypesOptionValue,
} from '@/types/jobs.model'

const Search = (): ReactElement => {
  const router = useRouter()

  const [selectedDatePosted, setSelectedDatePosted] = useState<DatePostedOptionValue>(DATE_POSTED_OPTIONS[0].value)
  const [search, setSearch] = useState<string>('')
  const [type, setType] = useState<EmploymentTypesOptionValue>(EMPLOYMENT_TYPES_OPTIONS[0].value)

  const selectedDatePostedHandler = (value: DatePostedOptionValue) => {
    setSelectedDatePosted(value)
  }

  const setSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const setTypeHandler = (value: EmploymentTypesOptionValue) => {
    setType(value)
  }

  const getJobsHandle = () => {
    const params = new URLSearchParams()
    if (search) params.set('query', search)
    if (selectedDatePosted) params.set('datePosted', selectedDatePosted)
    if (type) params.set('employment_types', type)

    router.push(`/${ROUTES.jobs}?${params.toString()}`)
  }

  return (
    <Card className='gap-[20px] flex flex-col'>
      <Typography as='h1' variant='h1'>
        Jobs
      </Typography>
      <TopBar
        options={DATE_POSTED_OPTIONS}
        selectedValue={selectedDatePosted}
        search={search}
        type={type}
        setType={setTypeHandler}
        onChange={selectedDatePostedHandler}
        setSearch={setSearchHandler}
        onClick={getJobsHandle}
      />
    </Card>
  )
}

export default Search
