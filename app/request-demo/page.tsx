'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
  name: z.string().max(100),
  email: z.string().email(),
  interestedProduct: z.string().max(100),
  message: z.string().max(500).optional()
})

type FormValues = z.infer<typeof formSchema>
const resolver = zodResolver(formSchema)

export default function RequestDemoContent() {
  const form = useForm<FormValues>({
    resolver
  })
  return (
    <div>
      <h1>Request a demo</h1>
      <p>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </p>
    </div>
  )
}
