'use server'

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
  const formData = Object.fromEntries(data)
  const parsed = formSchema.safeParse(formData)

  console.log(formData)
  await new Promise((resolve) => setTimeout(resolve, 1000))

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

  return { ok: true, message: 'Form submitted' }
}
