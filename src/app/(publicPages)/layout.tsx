import type { Metadata } from 'next'
import '@/app/globals.css'

import Index from '@/components/layouts/public/Index'
import { dana } from '@/utils/localFont'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dana.variable} font-sans`}>
        <Index>
          {children}
        </Index>
      </body>
    </html>
  )
}