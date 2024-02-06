import type { Meta, StoryObj } from '@storybook/react'

import { SliderComponent } from './SliderComponent'

const meta = {
  argTypes: {},
  component: SliderComponent,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof SliderComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {},
}
