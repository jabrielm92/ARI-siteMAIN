import './globals.css'

export const metadata = {
  title: 'ARI Solutions Inc - AI-Powered Business Automation',
  description: 'Leverage AI to build income-generating systems. Learn with our courses or let us implement AI automations for you.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}