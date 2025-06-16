import { ChangeEvent, ReactElement } from 'react'

import DropdownComponent from '@/components/dropdown-menu'
import TypesPopover from '@/components/typesPopover'
import { Button } from '@/shared/button'
import { Input } from '@/shared/input'
import { DATE_POSTED_OPTIONS, DatePostedOptionValue, EmploymentTypesOptionValue } from '@/types/jobs.model'

interface Props {
  options: typeof DATE_POSTED_OPTIONS
  selectedValue: DatePostedOptionValue
  search: string
  type: EmploymentTypesOptionValue
  setType: (_value: EmploymentTypesOptionValue) => void
  setSearch: (_search: ChangeEvent<HTMLInputElement>) => void
  onChange: (_options: DatePostedOptionValue) => void
  onClick: () => void
}

const TopBar = ({
  options,
  onChange,
  search,
  type,
  setType,
  setSearch,
  selectedValue,
  onClick,
}: Props): ReactElement => {
  return (
    <div className='flex flex-wrap gap-10 w-full sticky top-0 bg-background z-10 pb-3 sm:px-6'>
      <DropdownComponent options={options} onChange={onChange} selectedValue={selectedValue} />
      <Input placeholder='Searching of jobs' isSearch width='sm:w-[250px]' onChange={setSearch} value={search || ''} />
      <TypesPopover type={type} setType={setType} />
      <Button onClick={onClick} className='ml-auto'>
        Get
      </Button>
    </div>
  )
}

export default TopBar
