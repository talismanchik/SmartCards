import sprite from '@/assets/icons/sprite.svg'

type Props = {
  className?: string
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}

export const Icon = ({ className, height, iconId, viewBox, width }: Props) => {
  return (
    <svg
      className={`${className}`}
      height={height || '20'}
      viewBox={viewBox || '2 2 20 20'}
      width={width || '20'}
    >
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
  )
}
