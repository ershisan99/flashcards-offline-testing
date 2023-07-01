import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export interface TextProps<T extends ElementType> {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
    | 'error'
  children?: ReactNode
  className?: string
  color?: 'primary' | 'secondary' | 'inherit'
}

export function Typography<T extends ElementType = 'p'>({
  as,
  className,
  variant = 'body1',
  color = 'inherit',
  ...restProps
}: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
  const classNames = clsx(s.text, s[variant], s[color], className)
  const Component = as || 'p'

  return <Component className={classNames} {...restProps} />
}
