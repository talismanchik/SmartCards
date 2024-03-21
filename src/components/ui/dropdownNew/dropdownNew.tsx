import { ReactNode } from 'react'

import {
  Arrow,
  Content,
  Label,
  Portal,
  Root,
  Separator,
  Trigger,
} from '@radix-ui/react-dropdown-menu'

import s from './dropdownNew.module.scss'

type Props = {
  children: ReactNode
  label?: ReactNode
  trigger: ReactNode
}

export const DropdownNew = ({ children, label, trigger }: Props) => {
  return (
    <Root>
      <Trigger asChild>
        <button aria-label={'Customise options'} className={s.triggerButton}>
          {trigger}
        </button>
      </Trigger>

      <Portal>
        <Content align={'end'} className={s.content} sideOffset={5}>
          <Label>{label}</Label>
          {label && <CustomSeparator />}
          {children}
          <Arrow asChild className={s.arrowBox}>
            <div className={s.arrow} />
          </Arrow>
        </Content>
      </Portal>
    </Root>
  )
}

export const CustomSeparator = () => {
  return <Separator className={s.separator} />
}
