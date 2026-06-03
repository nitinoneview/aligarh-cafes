// app/api/notify/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    // 1. Parse the webhook payload from Supabase
    const body = await req.json()

    // Supabase sends the new row data inside body.record
    const record = body.record

    if (!record) {
      return NextResponse.json({ error: 'No record found' }, { status: 400 })
    }

    // 2. Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Aligarh Cafes <onboarding@resend.dev>', // Free tier sender
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `☕ New Cafe Submission: ${record.cafe_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D4622A;">☕ New Cafe Submission Received!</h2>
          <p>Someone has submitted their cafe on <strong>Aligarh Cafes</strong>.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background: #f5f3ef;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Cafe Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.cafe_name || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Owner Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.owner_name || 'N/A'}</td>
            </tr>
            <tr style="background: #f5f3ef;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">WhatsApp</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.whatsapp_number || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Area</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.area || 'N/A'}</td>
            </tr>
            <tr style="background: #f5f3ef;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Address</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.address || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Instagram</td>
              <td style="padding: 10px; border: 1px solid #ddd;">@${record.instagram_handle || 'N/A'}</td>
            </tr>
            <tr style="background: #f5f3ef;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Opening Time</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.opening_time || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Closing Time</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.closing_time || 'N/A'}</td>
            </tr>
            <tr style="background: #f5f3ef;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Couple Friendly</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.couple_friendly || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Has Rooftop</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.has_rooftop || 'N/A'}</td>
            </tr>
            <tr style="background: #f5f3ef;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Has WiFi</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.has_wifi || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${record.message || 'N/A'}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 15px; background: #fff3cd; border-radius: 8px;">
            <p style="margin: 0; color: #856404;">
              ⚡ <strong>Status:</strong> Pending Review
            </p>
            <p style="margin: 5px 0 0 0; color: #856404;">
              Login to Supabase to approve or reject this submission.
            </p>
          </div>

          <p style="margin-top: 30px; color: #888; font-size: 12px;">
            — Aligarh Cafes Notification System ☕
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })

  } catch (err) {
    console.error('Webhook handler error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
