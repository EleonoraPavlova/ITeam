import { BookCheck, NotebookPen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MouseEvent, ReactElement } from 'react'

import { ROUTES } from '@/app/api/routes'
import { Button } from '@/shared/button'
import { Typography } from '@/shared/typography'

interface Props {
  isClickable?: boolean
}

const Logo = ({ isClickable = true }: Props): ReactElement => {
  const logoName = 'Job search'
  const slogan = 'Discover Your Career Path'

  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (isClickable) {
      e.preventDefault()
      router.push(ROUTES.home)
    }
  }

  return (
    <div className='flex items-center gap-4'>
      <Button variant='link' size='icon' onClick={handleClick} type='button'>
        <div className='flex flex-col gap-1 items-center'>
          <NotebookPen />
          <BookCheck />
        </div>
      </Button>
      <div className='gap-1 flex flex-col items-start cursor-pointer' onClick={handleClick}>
        <Typography as='h3' variant='h2'>
          {logoName}
        </Typography>
        <Typography variant='subtitle2' className='hidden sm:block' gray>
          {slogan}
        </Typography>
      </div>
    </div>
  )
}

export default Logo
