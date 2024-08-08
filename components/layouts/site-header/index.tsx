import { CTAButton } from '@/components/ui/cta'
import { MainNav } from './main-nav'
import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          <nav className="flex items-center">{/* <ModeToggle /> */}</nav>
          <CTAButton variant="primary" asChild>
            <Link href="/request-demo">Request a demo</Link>
          </CTAButton>
        </div>
      </div>
    </header>
  )
}
