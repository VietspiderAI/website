import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().max(100),
  email: z.string().email(),
  product: z.string({ message: 'Please select a product' }),
  message: z.string().max(500).optional()
})
