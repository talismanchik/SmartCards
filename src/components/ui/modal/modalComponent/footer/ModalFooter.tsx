import { Button } from '@/components/ui/button'
import { Close } from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './ModalFooter.module.scss'

export const ModalFooter = () => {
  const classNames = {
    root: clsx(s.root),
  }

  return (
    <Close asChild>
      <div className={classNames.root}>
        <Button>Save changes</Button>
      </div>
    </Close>
  )
}
