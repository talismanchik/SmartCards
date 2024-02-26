// import s from './cardsService.ts.module.scss'

import { Link } from 'react-router-dom'

import { Icon } from '@/components/ui/icon/Icon'
import { useGetDecksByIDQuery } from '@/services/cardss/cardsService'

export const Cards = () => {
  const { data } = useGetDecksByIDQuery({
    id: 'cls3s7drs035wrr2ufg2v1ik1',
  })

  console.log(data)

  return (
    <div>
      <Link to={''}>
        <Icon iconId={'arrow_back_outline'} />
        Return to Previous Page
      </Link>
    </div>
  )
}
