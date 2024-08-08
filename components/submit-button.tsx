'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & { className?: string }

export function SubmitButton({ children, className }: Props) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className={className} disabled={pending}>
      {children}
    </Button>
  )
}
