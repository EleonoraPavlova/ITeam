'use client'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { buttonVariants } from './button-variants'

export const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'

  return <Comp data-slot='button' ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
})

Button.displayName = 'Button'
