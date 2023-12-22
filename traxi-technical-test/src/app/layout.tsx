import type { Metadata } from 'next' 
import '@/styles/globals.css'
import StyledComponentsRegistry from '../lib/registry' 
import ThemeRegistry from "../lib/ThemeRegistry";

export const metadata: Metadata = {
  title: 'Trx demo',
  description: 'Autor Gunnar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ThemeRegistry>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </ThemeRegistry>
      </body>
    </html>
  )
}

