import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button>Button without link</Button>
      <Button as={'a'} href={''}>
        Button with link
      </Button>
    </div>
  )
}
