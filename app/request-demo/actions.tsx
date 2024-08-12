'use server'

import { sendMail } from '@/lib/send-mail'
import { formSchema } from './form-schema'

export type FormState = {
  ok: boolean
  message: string
  fields?: Record<string, string>
  issues?: string[]
}

export async function submitAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  try {
    const formData = Object.fromEntries(data)
    const parsed = formSchema.safeParse(formData)

    if (!parsed.success) {
      const fields: Record<string, string> = {}
      for (const key of Object.keys(formData)) {
        fields[key] = formData[key].toString()
      }
      return {
        ok: false,
        message: 'Invalid form data',
        fields,
        issues: parsed.error.issues.map((issue) => issue.message)
      }
    }

    // Send the email
    await sendMail({
      subject: '[NEW] Have a new request demo from form submission',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nProduct: ${formData.product}\nMessage: ${formData.message}`
    })

    return { ok: true, message: 'Form submitted' }
  } catch (error) {
    return { ok: false, message: 'Cannot request the demo now! Please try it again' }
  }
}
