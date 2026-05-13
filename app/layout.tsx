import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MeetingAssign — Automatically Assign Meeting Action Items',
  description: 'Transcribe meetings, extract action items with AI, suggest assignees, and send automated follow-up reminders. Built for team leads and project managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="038f8f0b-3a8c-4fe0-88ff-424aa797499b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
