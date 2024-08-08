import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'

interface AppLayoutProps {
  modal: React.ReactNode
  children: React.ReactNode
}

export default function AppLayout({ children, modal }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {modal}
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
