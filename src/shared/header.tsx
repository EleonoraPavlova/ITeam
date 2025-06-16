'use client'

import { Heart, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef, ReactElement, useEffect } from 'react'

import { ROUTES } from '@/app/api/routes'
import { cn } from '@/lib/utils'
import Logo from '@/shared/logo'
import { Typography } from '@/shared/typography'
import { useAppSelector } from '@/store/hooks'

import { Button } from './button'

type HeaderProps = ComponentPropsWithoutRef<'header'>
type HeaderRef = ComponentRef<'header'>

export const Header = forwardRef<HeaderRef, HeaderProps>(({ className, ...rest }, ref): ReactElement => {
  const account = useAppSelector((state) => state.account.account)
  const router = useRouter()

  const likedClickHandle = () => {
    router.push(`/${ROUTES.liked}`)
  }
  useEffect(() => {}, [router])

  console.log('account', account)
  return (
    <header ref={ref} className={cn('w-full bg-background rounded-t-[30px]', className)} {...rest}>
      <div className='flex items-center gap-4 py-4 px-4 sm:px-[64px] sm:py-[20px] justify-between'>
        <Logo />
        <div className='flex flex-wrap items-center gap-2 justify-center sm:justify-start'>
          {account?._id ? (
            <Typography>{account.name}</Typography>
          ) : (
            <Link href={`/${ROUTES.createProfile}`}>
              <Button variant='outline'>
                <User width={10} height={10} />
                Create profile
              </Button>
            </Link>
          )}
          <Heart width={18} height={18} color='red' onClick={likedClickHandle} className='cursor-pointer' />
        </div>
      </div>
      <span className='flex w-full h-[1px] bg-muted-foreground/30' />
    </header>
  )
})

Header.displayName = 'Header'
