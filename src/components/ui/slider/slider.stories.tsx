import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { Slider } from '@/components/ui/slider/slider'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta

export const Default = {
  render() {
    const [value, setValue] = useState([0, 100])

    return <Slider label={'slider'} onValueChange={setValue} values={value} />
  },
}
