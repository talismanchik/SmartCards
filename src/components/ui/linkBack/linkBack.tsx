import { Link } from 'react-router-dom'

import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'

import s from './linkBack.module.scss'
type LinkBackProps = {
  text?: string
  to?: string
}

export const LinkBack = ({ text = 'Back to Previous Page', to = '/' }: LinkBackProps) => {
  return (
    <Link className={s.previousPage} to={to}>
      <Icon iconId={'arrow_back_outline'} />
      <Typography variant={'body2'}>{text}</Typography>
    </Link>
  )
}
