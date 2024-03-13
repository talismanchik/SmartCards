import { Typography } from '@/components/ui/typography'

import s from '@/pages/learn/learn.module.scss'

type Props = {
  image?: string
  subtitle: string
  title: string
}
export const LearnImage = ({ image, subtitle, title }: Props) => {
  return (
    <>
      <Typography className={s.question} variant={'subtitle1'}>
        {title}: {subtitle}
      </Typography>
      {image && <img alt={title} src={image} />}
    </>
  )
}
