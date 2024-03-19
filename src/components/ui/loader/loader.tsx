import s from './loader.module.scss'
export const Loader = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.loader}></span>
    </div>
  )
}
