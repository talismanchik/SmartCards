import { To, useNavigate } from 'react-router-dom'

import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'

import s from './linkBack.module.scss'

type LinkBackProps = {
  text?: string
  to?: To
}

export const LinkBack = ({ text = 'Back to Previous Page', to }: LinkBackProps) => {
  const navigate = useNavigate()
  const backToHandler = () => {
    to ? navigate(to) : navigate(-1)
  }

  return (
    <div className={s.previousPage} onClick={backToHandler}>
      <Icon iconId={'arrow_back_outline'} />
      <Typography variant={'body2'}>{text}</Typography>
    </div>
  )
}
