import * as Slider from '@radix-ui/react-slider'
import s from './Slider.module.scss'

export type SliderComponentProps = {
  startValues?: number[]
}

export const SliderComponent = ({ startValues = [0, 100] }: SliderComponentProps) => {

  return (
    <form>
      <Slider.Root className={s.SliderRoot} min={0} max={100} defaultValue={startValues} >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.SliderThumb} aria-label="Volume" />
        <Slider.Thumb className={s.SliderThumb} aria-label="Volume" />
      </Slider.Root>
    </form>
  )
}
