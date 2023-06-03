import './globals.css'
import { Sriracha, Merriweather } from 'next/font/google'

const sriracha = Sriracha({ subsets: ['latin'], weight: "400", variable: '--font-sriracha' });
const merriweather = Merriweather({ subsets: ['latin'], weight: "400", variable: '--font-merriweather' });
export { sriracha, merriweather }

export const metadata = {
  title: 'Matthew Oley',
  description: 'Student at RIT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
