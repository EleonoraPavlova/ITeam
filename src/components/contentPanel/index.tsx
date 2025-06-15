import { ReactNode } from 'react'

import { Card } from '@/shared/card'
import { Typography } from '@/shared/typography'

interface Props {
  title: string
  children: ReactNode
  className?: string
}

const ContentPanel = ({ title, children, className }: Props) => {
  return (
    <div className='py-0 px-[30px]'>
      <Card className={className}>
        <div className='pb-4 text-center'>
          <Typography as='h6' variant='subtitle1'>
            {title}
          </Typography>
        </div>
        {children}
      </Card>
    </div>
  )
}

export default ContentPanel
