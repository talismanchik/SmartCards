import { Button } from '@/components/ui/button'
import { Close } from '@radix-ui/react-dialog'

export const ModalFooter = () => {
  return (
    <Close asChild>
      <Button>Save changes</Button>
    </Close>
  )
}
