import Link from 'next/link'
import { ReactElement } from 'react'

import { LinkItem } from '@/components/jobs/const'
import { Typography } from '@/shared/typography'

interface Props {
  data: LinkItem[]
}

const LinkInfo = ({ data }: Props): ReactElement => {
  return (
    <>
      {data.map(({ label, key }) => (
        <Typography key={label}>
          {label}:
          {key ? (
            <Link href={key} className='px-3 underline text-blue-600'>
              tap
            </Link>
          ) : (
            <span className='text-gray-500 px-3'>N/A</span>
          )}
        </Typography>
      ))}
    </>
  )
}

export default LinkInfo
