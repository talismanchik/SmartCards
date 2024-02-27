import { Icon } from '@/components/ui/icon/Icon'

import s from './gradeStar.module.scss'

type StarProps = {
  grade: number
}
export const GradeStar = ({ grade }: StarProps) => {
  const maxStars = 5

  const stars = Array.from({ length: maxStars }, (_, index) => {
    const isFilled = index < grade
    const iconId = isFilled ? 'star' : 'star_outline'

    return <Icon className={s.grade} iconId={iconId} key={index} />
  })

  return <span>{stars}</span>
}
