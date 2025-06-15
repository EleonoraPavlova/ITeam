'use client'

import { User } from 'lucide-react'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef, ReactElement } from 'react'

import { cn } from '@/lib/utils'
import Logo from '@/shared/logo'

import { Button } from './button'

type HeaderProps = ComponentPropsWithoutRef<'header'>
type HeaderRef = ComponentRef<'header'>

export const Header = forwardRef<HeaderRef, HeaderProps>(({ className, ...rest }, ref): ReactElement => {
  return (
    <header ref={ref} className={cn('w-full bg-background rounded-t-[30px]', className)} {...rest}>
      <div className='flex items-center gap-4 py-4 px-4 sm:px-[64px] sm:py-[20px] justify-between'>
        <Logo />
        <div className='flex flex-wrap items-center gap-2 justify-center sm:justify-start'>
          <Button variant='outline'>
            <User width={10} height={10} />
            Create profile
          </Button>
        </div>
      </div>
      <span className='flex w-full h-[1px] bg-muted-foreground/30' />
    </header>
  )
})

Header.displayName = 'Header'
