import { z } from 'zod'

export const contactSchema = z.object({
  fullname: z.string().trim().min(1, 'Full name is required'),
  email:    z.string().trim().email('Enter a valid email address'),
  message:  z.string().trim().min(1, 'Message is required'),
})

export type ContactFormValues = z.infer<typeof contactSchema>