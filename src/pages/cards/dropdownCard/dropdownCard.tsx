import { useState } from 'react'

import { CustomSeparator, DropdownNew } from '@/components/ui/dropdownNew'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import { DeleteDeck } from '@/features/deck/deleteDeck'
import { UpdateDeck } from '@/features/deck/updateDeck'
import { GetDeckResponse } from '@/services/cards/cards.types'
import { UpdateDeleteDeckArgs } from '@/services/decks/decks.types'
import { Item } from '@radix-ui/react-dropdown-menu'

import s from '@/pages/cards/cards.module.scss'
type Props = {
  deckData?: GetDeckResponse
  learnCards: () => void
  onDeleteDeck: (id: UpdateDeleteDeckArgs) => void
}

export const DropdownCard = ({ deckData, learnCards, onDeleteDeck }: Props) => {
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [isOpenDelete, setIsOpenDelete] = useState(false)

  return (
    <>
      <DropdownNew
        trigger={
          <Icon
            className={s.triggerDropdown}
            height={'24'}
            iconId={'more_vertical'}
            viewBox={'0 0 22 22'}
            width={'24'}
          />
        }
      >
        <Item className={s.dropItem} onClick={learnCards}>
          <Icon iconId={'play_circle_outline'} />
          <Typography variant={'caption'}>Learn</Typography>
        </Item>
        <CustomSeparator />
        <div>
          <Item className={s.dropItem} onClick={() => setIsOpenUpdate(true)}>
            <Icon iconId={'edit_outline'} />
            <Typography variant={'caption'}>Edit</Typography>
          </Item>
        </div>
        <CustomSeparator />
        <div>
          <Item className={s.dropItem} onClick={() => setIsOpenDelete(true)}>
            <Icon iconId={'trash_outline'} />
            <Typography variant={'caption'}>Delete</Typography>
          </Item>
        </div>
      </DropdownNew>
      {deckData && (
        <>
          <DeleteDeck
            deckName={deckData.name}
            id={{ id: deckData.id }}
            isOpen={isOpenDelete}
            onDeleteDeck={() => onDeleteDeck({ id: deckData.id })}
            onOpenChange={value => setIsOpenDelete(value)}
            title={'Delete Deck'}
          />
          <UpdateDeck
            cover={deckData.cover}
            id={deckData.id}
            isOpen={isOpenUpdate}
            isPrivate={deckData.isPrivate}
            name={deckData.name}
            onOpenChange={value => setIsOpenUpdate(value)}
            title={'Update Deck'}
          />
        </>
      )}
    </>
  )
}
