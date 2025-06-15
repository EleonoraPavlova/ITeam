import { ReactElement } from 'react'

import { Dropdown, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown'
import { Button } from '@/shared/button'
import { DatePostedOptionValue } from '@/types/jobs.model'

interface Props {
  options: DatePostedOptionValue[]
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
          <DropdownMenuItem key={item} onClick={() => onChange(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </Dropdown>
  )
}

export default DropdownComponent
