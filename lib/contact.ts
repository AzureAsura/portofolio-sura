'use server'

import { Resend } from 'resend'
import { z } from 'zod'
import { contactSchema } from './zod'


export type ContactFormState = {
  success: boolean
  message: string
  errors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    fullname: formData.get('fullname'),
    email:    formData.get('email'),
    message:  formData.get('message'),
  }

  const result = contactSchema.safeParse(raw)

  if (!result.success) {
    return {
      success: false,
      message: 'Please fix the errors below.',
      errors: z.flattenError(result.error).fieldErrors as ContactFormState['errors'],
    }
  }

  const data = result.data

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { error } = await resend.emails.send({
      from:    'Portfolio Contact <onboarding@resend.dev>',
      to:      'paramasuraqutay@gmail.com',
      replyTo: data.email,
      subject: `New contact form submission from ${data.fullname}`,
      html: `
        <table style="font-family:sans-serif;font-size:14px;color:#333;border-collapse:collapse;width:100%;max-width:600px">
          <tr><td colspan="2" style="padding:16px 0;font-size:18px;font-weight:700;color:#f59e0b;border-bottom:2px solid #f59e0b">
            Portfolio — New Contact Form Submission
          </td></tr>
          <tr>
            <td style="padding:12px 8px;font-weight:600;width:120px">Name</td>
            <td style="padding:12px 8px">${data.fullname}</td>
          </tr>
          <tr style="background:#f9f9f9">
            <td style="padding:12px 8px;font-weight:600">Email</td>
            <td style="padding:12px 8px"><a href="mailto:${data.email}" style="color:#f59e0b">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding:12px 8px;font-weight:600;vertical-align:top">Message</td>
            <td style="padding:12px 8px;white-space:pre-wrap">${data.message}</td>
          </tr>
        </table>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return {
        success: false,
        message: 'Something went wrong. Please try again.',
      }
    }
  } catch (err) {
    console.error('Unexpected error sending email:', err)
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    }
  }

  return {
    success: true,
    message: "Thanks! I'll get back to you soon.",
  }
}
