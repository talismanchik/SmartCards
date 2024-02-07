import sprite from '@/assets/icons/sprite.svg'

type Props = {
  className?: string
  height?: string
  iconId:
    | 'arrow_back'
    | 'arrow_back_outline'
    | 'arrow_down'
    | 'arrow_forward'
    | 'arrow_forward_outline'
    | 'arrow_up'
    | 'checkbox_false'
    | 'checkbox_true'
    | 'close'
    | 'edit'
    | 'edit_outline'
    | 'eye'
    | 'eye_off'
    | 'eye_off_outline'
    | 'eye_outline'
    | 'home'
    | 'home_outline'
    | 'image'
    | 'image_outline'
    | 'log_out'
    | 'more_vertical'
    | 'pause_circle'
    | 'pause_circle_outline'
    | 'person'
    | 'person_outline'
    | 'play_circle'
    | 'play_circle_outline'
    | 'radio_button_checked'
    | 'radio_button_unchecked'
    | 'search'
    | 'star'
    | 'star_outline'
    | 'trash'
    | 'trash_outline'
  viewBox?: string
  width?: string
}

export const Icon = ({ className, height, iconId, viewBox, width }: Props) => {
  return (
    <svg
      className={`${className}`}
      height={height || '16'}
      viewBox={viewBox || '2 2 20 20'}
      width={width || '16'}
    >
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
  )
}
