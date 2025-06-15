import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef, ReactElement } from 'react'

import { cn } from '@/lib/utils'

type Props<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>
type InferType<T> = T extends ElementType<infer U> ? U : never

export const Card = forwardRef(
  <T extends ElementType = 'div'>(props: Props<T>, ref: ForwardedRef<InferType<T>>): ReactElement => {
    const { as: Component = 'div', className, ...rest } = props
    const classNames = cn('w-full py-[20px] px-[14px] bg-background rounded-b-[30px]', className)

    return <Component className={classNames} ref={ref} {...rest} />
  }
)

Card.displayName = 'Card'
