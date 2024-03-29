import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import { Close } from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './ModalHeader.module.scss'
type Props = {
  title: string
}
export const ModalHeader = ({ title }: Props) => {
  const classNames = {
    button: clsx(s.button),
    root: clsx(s.root),
  }

  return (
    <div className={classNames.root}>
      <Typography variant={'h3'}>{title}</Typography>

      <Close asChild>
        <button aria-label={'Close'} className={classNames.button}>
          <Icon height={'24'} iconId={'close'} viewBox={'3 3 18 18'} width={'24'} />
        </button>
      </Close>
    </div>
  )
}
