import { SquareLogo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <main className="container mt-8">
      <Button variant="ghost" className="gap-2 text-muted-foreground mb-4" asChild>
        <Link href="/">
          <ChevronLeft size={16} />
          Back
        </Link>
      </Button>
      <div className="mx-auto max-w-lg space-y-3">
        <SquareLogo />
        {children}
      </div>
    </main>
  )
}
