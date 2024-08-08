import { Button } from '@/components/ui/button'

interface Props {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <main className="container relative mt-12">
      <Button variant="ghost" className="absolute">
        Back
      </Button>
      <div className="mx-auto max-w-lg">{children}</div>
    </main>
  )
}
