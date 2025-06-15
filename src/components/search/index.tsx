'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, ReactElement, useState } from 'react'

import TopBar from '@/components/topBar'
import { Card } from '@/shared/card'
import { Typography } from '@/shared/typography'
import {
  DATE_POSTED_OPTIONS,
  DatePosted,
  EMPLOYMENT_TYPES_OPTIONS,
  EmploymentTypesOptionValue,
} from '@/types/jobs.model'

const Search = (): ReactElement => {
  const router = useRouter()

  const [selectedDatePosted, setSelectedDatePosted] = useState<DatePosted>(DatePosted.All)
  const [search, setSearch] = useState<string>('')
  const [type, setType] = useState<EmploymentTypesOptionValue>(EMPLOYMENT_TYPES_OPTIONS[0].value)

  const selectedDatePostedHandler = (value: DatePosted) => {
    setSelectedDatePosted(value)
  }

  const setSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const setTypeHandler = (value: EmploymentTypesOptionValue) => {
    setType(value)
  }

  const handleGet = () => {
    const params = new URLSearchParams()
    if (search) params.set('query', search)
    if (selectedDatePosted) params.set('datePosted', selectedDatePosted)
    if (type) params.set('type', type)

    router.push(`/search?${params.toString()}`)
  }

  const isDisabled = ![selectedDatePosted, search].some(Boolean)
  const optionsValue = DATE_POSTED_OPTIONS.map((option) => option.value)

  return (
    <Card className='gap-[20px] flex flex-col'>
      <Typography as='h1' variant='h1'>
        Jobs
      </Typography>
      <TopBar
        options={optionsValue}
        disabled={isDisabled}
        selectedValue={selectedDatePosted}
        search={search}
        type={type}
        setType={setTypeHandler}
        onChange={selectedDatePostedHandler}
        setSearch={setSearchHandler}
        onGet={handleGet}
      />
    </Card>
  )
}

export default Search
