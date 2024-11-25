'use client'

import { SubmitButton } from '@/components/submit-button'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { useFormState } from 'react-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { submitAction } from './actions'
import { formSchema } from './form-schema'

type FormValues = z.infer<typeof formSchema>
const resolver = zodResolver(formSchema)

export default function RequestDemoContent() {
  const [state, formAction] = useFormState(submitAction, {
    message: '',
    ok: false
  })
  const form = useForm<FormValues>({
    resolver,
    defaultValues: {
      ...(state.fields ?? {})
    }
  })
  const router = useRouter()

  const formRef = useRef<HTMLFormElement>(null)

  if (state.ok) {
    return (
      <div>
        <h1 className="text-2xl font-medium">The request was sent!</h1>
        <div className="mt-6 text-accent-foreground">
          We'll reach out to you within the next 24 hours. Keep an eye on your
          inbox.
        </div>
        <Button variant="link" className="px-0" onClick={() => router.back()}>
          Discover more products
        </Button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-medium">Request a demo</h1>
      <Form {...form}>
        <div className="mt-2 w-full rounded-lg bg-destructive/10 text-destructive text-sm">
          {state?.message !== '' && !state.issues && (
            <span className="inline-flex py-2 px-3">{state.message}</span>
          )}
          {state?.issues && (
            <ul className="py-2 px-3">
              {state.issues.map((issue) => (
                <li key={issue} className="flex gap-1">
                  <X fill="red" />
                  {issue}
                </li>
              ))}
            </ul>
          )}
        </div>
        <form
          ref={formRef}
          onSubmit={(evt) => {
            form.handleSubmit((values) => {
              const formData = new FormData(formRef.current!)
              formData.append('product', values.product)
              formAction(formData)
            })(evt)
          }}
          className="mt-6 space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel asterisk>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel asterisk>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  We will contact with you via this email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="product"
            render={({ field }) => (
              <FormItem>
                <FormLabel asterisk>What products interest you?</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    {...field}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="VietSpider Analytics">
                        VietSpider Analytics
                      </SelectItem>
                      <SelectItem value="Product 2">Product 2</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about what you are looking for"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton className="w-full">Send</SubmitButton>
        </form>
        <div className="mt-4 text-xs text-muted-foreground">
          After the request was sent, we'll reach out to you within the next 24
          hours. Keep an eye on your inbox.
        </div>
      </Form>
    </div>
  )
}
