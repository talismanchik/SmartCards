import { BrowserRouter } from 'react-router-dom'

import { Loader } from '@/components/ui/loader/loader'
import { Meta } from '@storybook/react'

const meta: Meta = {
  component: Loader,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  title: 'Components/Loader',
}

export default meta

export const Default = () => <Loader />
