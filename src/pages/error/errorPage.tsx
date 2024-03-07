import { useNavigate } from 'react-router-dom'

import { ErrorSvg } from '@/assets/error/errorSVG'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './errorPage.module.scss'

export const ErrorPage = () => {
  const navigate = useNavigate()
  const navigateHandler = () => navigate('/')

  return (
    <div className={s.errorPageContainer}>
      <ErrorSvg />
      <Typography className={s.sorryText}>Sorry! Page not Found!</Typography>
      <Button onClick={navigateHandler}>Back to home page</Button>
    </div>
  )
}
