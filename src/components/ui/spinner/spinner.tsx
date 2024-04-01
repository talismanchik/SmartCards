import s from './spinner.module.scss'
export const Spinner = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.loader}> </span>
    </div>
  )
}
