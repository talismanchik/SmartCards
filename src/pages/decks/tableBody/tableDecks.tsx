import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import defaultImage from '@/assets/defaultImg.png'
import { Icon } from '@/components/ui/icon/Icon'
import { TableDataCell, TableRow } from '@/components/ui/table/tableConstructor'
import { Typography } from '@/components/ui/typography'
import { DeleteDeck } from '@/features/deck/deleteDeck'
import { UpdateDeck } from '@/features/deck/updateDeck'
import { Deck, UpdateDeleteDeckArgs } from '@/services/decks/decks.types'
import { useDeleteDeckMutation } from '@/services/decks/decksService'
import clsx from 'clsx'

import s from '@/components/ui/table/table.module.scss'

type Props = {
  deck: Deck
  learnDeckHandler: (id: string) => void
  myId: string | undefined
}

export const TableDecks = ({ deck, learnDeckHandler, myId }: Props) => {
  const [deleteDeckById] = useDeleteDeckMutation()
  const [isOpenDelete, setIsOpenDelete] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const navigate = useNavigate()
  const isMyDeck = deck.author.id === myId
  const isEmpty = deck.cardsCount === 0

  const onLinkToCards = (id: string) => {
    navigate(`/cards/${id}`)
  }

  const styles = {
    iconWrapper: clsx(s.iconWrapper, isEmpty && s.disabled),
    iconWrapperPlay: clsx(s.iconWrapperPlay, isEmpty && s.disabled),
    nameWrapper: clsx(s.nameWrapper, s.cursorPointer),
  }

  const onDeleteDeck = async (id: UpdateDeleteDeckArgs) => {
    if (id) {
      await toast.promise(deleteDeckById(id).unwrap(), {
        error: "Couldn't Delete",
        success: 'Deck was deleted',
      })
    }
    setIsOpenDelete(false)
  }

  return (
    <TableRow key={deck.id}>
      <TableDataCell onClick={() => onLinkToCards(deck.id)}>
        <div className={styles.nameWrapper}>
          {deck.cover ? (
            <img alt={'question-image'} className={s.tableImage} src={deck.cover} />
          ) : (
            <img alt={'default-image'} className={s.tableImage} src={defaultImage} />
          )}
          <Typography title={deck.name} variant={'body2'}>
            {deck.name}
          </Typography>
        </div>
      </TableDataCell>
      <TableDataCell>
        <Typography variant={'body2'}>{deck.cardsCount}</Typography>
      </TableDataCell>
      <TableDataCell>
        <Typography variant={'body2'}>
          {new Date(deck.updated).toLocaleDateString('ru-RU')}
        </Typography>
      </TableDataCell>
      <TableDataCell>
        <Typography variant={'body2'}>{deck.author.name}</Typography>
      </TableDataCell>
      <TableDataCell>
        <div className={s.iconContainer}>
          {isMyDeck && (
            <div>
              <button className={styles.iconWrapper} onClick={() => setIsOpenUpdate(true)}>
                <Icon iconId={'edit_outline'} />
              </button>
              <UpdateDeck
                cover={deck.cover}
                id={deck.id}
                isOpen={isOpenUpdate}
                isPrivate={deck.isPrivate}
                name={deck.name}
                onOpenChange={value => setIsOpenUpdate(value)}
                title={'Update Deck'}
              />
            </div>
          )}

          <button className={styles.iconWrapperPlay} onClick={() => learnDeckHandler(deck.id)}>
            <Icon iconId={'play_circle_outline'} />
          </button>

          {isMyDeck && (
            <div>
              <button className={styles.iconWrapper} onClick={() => setIsOpenDelete(true)}>
                <Icon iconId={'trash_outline'} />
              </button>
              <DeleteDeck
                deckName={deck.name}
                id={{ id: deck.id }}
                isOpen={isOpenDelete}
                onDeleteDeck={onDeleteDeck}
                onOpenChange={value => setIsOpenDelete(value)}
                title={'Delete Deck'}
              />
            </div>
          )}
        </div>
      </TableDataCell>
    </TableRow>
  )
}
