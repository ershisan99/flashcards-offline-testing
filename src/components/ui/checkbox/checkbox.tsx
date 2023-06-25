import { forwardRef } from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { Checked } from '../../../assets/icons'

import s from './checkbox.module.scss'

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    label?: string
  }
>(({ className, label, ...props }, ref) => {
  return (
    <label className={s.label}>
      <CheckboxPrimitive.Root ref={ref} className={s.root} {...props}>
        <CheckboxPrimitive.Indicator className={s.indicator}>
          <Checked />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label}
    </label>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
