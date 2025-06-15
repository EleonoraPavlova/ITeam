import { ArrowUpDown } from 'lucide-react'
import { ReactElement, useState } from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/shared/button'
import { Typography } from '@/shared/typography'
import { EMPLOYMENT_TYPES_OPTIONS, EmploymentTypesOptionValue } from '@/types/jobs.model'

interface Props {
  type: EmploymentTypesOptionValue
  setType: (_value: EmploymentTypesOptionValue) => void
}

const TypesPopover = ({ type, setType }: Props): ReactElement => {
  const [open, setOpen] = useState(false)

  const selectTypeHandler = (item: EmploymentTypesOptionValue) => {
    setType(item)
    setOpen(!open)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className='flex items-center gap-2 cursor-pointer'>
        <ArrowUpDown width={16} height={16} />
        <Typography>Employment types:</Typography>
        <Typography className='text-primary'>{type}</Typography>
      </PopoverTrigger>
      <PopoverContent className='flex flex-col gap-2 p-2 w-[180px]'>
        {EMPLOYMENT_TYPES_OPTIONS.map(({ label, value }) => (
          <Button key={value} variant='ghost' onClick={() => selectTypeHandler(value)}>
            {label}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  )
}
export default TypesPopover
