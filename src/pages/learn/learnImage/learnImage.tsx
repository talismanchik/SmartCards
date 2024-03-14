import { Typography } from '@/components/ui/typography'

import s from './learnImage.module.scss'

type Props = {
  image?: string
  subtitle?: string
  title: string
}
export const LearnImage = ({ image, subtitle, title }: Props) => {
  return (
    <>
      <Typography className={s.title} variant={'subtitle1'}>
        {title}:{' '}
        <Typography className={s.subtitle} variant={'body1'}>
          {subtitle}
        </Typography>
      </Typography>
      <div className={s.imageWrapper}>
        {image && <img alt={title} className={s.image} src={image} />}
      </div>
    </>
  )
}
