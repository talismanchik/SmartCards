import { BrowserRouter } from 'react-router-dom'

import { LinkBack } from '@/components/ui/linkBack'
import { Meta } from '@storybook/react'

const meta: Meta = {
  component: LinkBack,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  title: 'Components/LinkBack',
}

export default meta

export const Default = () => <LinkBack />
// Default.storyName = 'Default'
