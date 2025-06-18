'use client'

import { Heart, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef, ReactElement } from 'react'

import { ROUTES } from '@/app/api/routes'
import { cn } from '@/lib/utils'
import Logo from '@/shared/logo'
import { Progress } from '@/shared/progress'
import { Typography } from '@/shared/typography'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { logout } from '@/store/reducers/auth'

import { Button } from './button'

type HeaderProps = ComponentPropsWithoutRef<'header'>
type HeaderRef = ComponentRef<'header'>

export const Header = forwardRef<HeaderRef, HeaderProps>(({ className, ...rest }, ref): ReactElement => {
  const user = useAppSelector((state) => state.account.account?.user)
  const isLoadingAcc = useAppSelector((state) => state.account.isLoading)
  const isLoadingAuth = useAppSelector((state) => state.auth.isLoading)

  const dispatch = useAppDispatch()

  const router = useRouter()
  const pathname = usePathname()

  const likedClickHandle = () => {
    router.push(`/${ROUTES.liked}`)
  }

  const logoutHandle = () => {
    dispatch(logout())
  }

  const isLoginPage = pathname === `/${ROUTES.login}`

  return (
    <>
      <header ref={ref} className={cn('w-full bg-background rounded-t-[30px]', className)} {...rest}>
        <div className='flex items-center gap-4 py-4 px-4 sm:px-[64px] sm:py-[20px] justify-between'>
          <Logo />
          <div className='flex flex-wrap items-center gap-2 justify-center sm:justify-start'>
            {user?._id ? (
              <>
                <Typography>{user.name}</Typography>
                <Link href={`/${ROUTES.home}`}>
                  <Button variant='outline' onClick={logoutHandle}>
                    Logout
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href={`/${ROUTES.createProfile}`}>
                  <Button variant='outline'>
                    <User width={10} height={10} />
                    Create profile
                  </Button>
                </Link>
                {!isLoginPage && (
                  <Link href={`/${ROUTES.login}`}>
                    <Button variant='outline'>Login</Button>
                  </Link>
                )}
              </>
            )}
            <Heart width={18} height={18} color='red' onClick={likedClickHandle} className='cursor-pointer' />
          </div>
        </div>
        <span className='flex w-full h-[1px] bg-muted-foreground/30' />
      </header>
      {(isLoadingAcc || isLoadingAuth) && <Progress />}
    </>
  )
})

Header.displayName = 'Header'
