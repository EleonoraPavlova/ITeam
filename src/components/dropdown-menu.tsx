import { ReactElement } from 'react'

import { Dropdown, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { Button } from '@/shared/button'
import { DATE_POSTED_OPTIONS, DatePostedOptionValue } from '@/types/jobs.model'

interface Props {
  options: typeof DATE_POSTED_OPTIONS
  selectedValue: DatePostedOptionValue
  onChange: (_options: DatePostedOptionValue) => void
}

const DropdownComponent = ({ options, selectedValue, onChange }: Props): ReactElement => {
  return (
    <Dropdown>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='w-full sm:w-[220px]'>
          {selectedValue || 'Date posted'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-full sm:w-[220px]'>
        {options.map((item) => (
          <DropdownMenuItem key={item.value} onClick={() => onChange(item.value)}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </Dropdown>
  )
}

export default DropdownComponent
