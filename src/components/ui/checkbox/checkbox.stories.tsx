import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './index.ts'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary Checkbox',
    disabled: false,
  },
}
